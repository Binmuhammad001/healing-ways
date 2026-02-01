import React, { useState, useEffect } from 'react';
import { dashboardAPI } from '../components/services/api';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import DashboardOverview from '../components/dashboard/patient/DashboardOverview';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Use dashboardAPI
      const response = await dashboardAPI.getDashboard();
      
      if (response.data.success) {
        setDashboardData(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardOverview
        user={user}
        statistics={dashboardData?.statistics}
        recentConsultations={dashboardData?.recentConsultations}
      />
    </DashboardLayout>
  );
};

export default PatientDashboard;
