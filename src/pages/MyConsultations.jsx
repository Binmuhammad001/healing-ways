import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import ConsultationsList from '../components/dashboard/patient/ConsultationsList';

const MyConsultations = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchConsultations();
  }, [filter]);

  const fetchConsultations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/dashboard/consultations?status=${filter}`
      );
      if (response.data.success) {
        setConsultations(response.data.data.consultations);
      }
    } catch (error) {
      console.error('Failed to fetch consultations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Consultations</h1>
        <p className="text-gray-600 mt-2">View and manage all your consultation bookings</p>
      </div>

      <ConsultationsList
        consultations={consultations}
        loading={loading}
        filter={filter}
        setFilter={setFilter}
      />
    </DashboardLayout>
  );
};

export default MyConsultations;
