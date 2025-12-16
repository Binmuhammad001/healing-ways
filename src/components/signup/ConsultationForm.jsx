import React, { useState, useEffect } from 'react';
import { ChevronDown, Upload, X } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Add this import

export default function ConsultationForm() {
  const navigate = useNavigate(); // Add this hook
  const [formData, setFormData] = useState({
    service: '',
    country: '',
    prisonholder: 'No',
    medicalHistory: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState('');

  // Get token from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      // Use navigate instead of window.location for React Router
      navigate('/login');
      return;
    }
    setToken(storedToken);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file size (5MB max)
    const validFiles = files.filter(file => file.size <= 5 * 1024 * 1024);
    
    if (validFiles.length !== files.length) {
      setError('Some files exceed the 5MB size limit');
      return;
    }

    setUploadedFiles([...uploadedFiles, ...validFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      setError('Please login first');
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Prepare FormData for file upload
      const submissionData = new FormData();
      
      // Append form fields
      submissionData.append('service', formData.service);
      submissionData.append('country', formData.country);
      submissionData.append('prisonholder', formData.prisonholder);
      submissionData.append('medicalHistory', formData.medicalHistory);
      
      // Append files
      uploadedFiles.forEach(file => {
        submissionData.append('medicalReports', file);
      });

      // Make API call - UPDATE THIS URL TO YOUR BACKEND
      const response = await axios.post(
        'http://localhost:5000/api/consultations/book', // Make sure this matches your backend
        submissionData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.data.success) {
        setSuccess('Consultation booked successfully!');
        
        // Reset form
        setFormData({
          service: '',
          country: '',
          prisonholder: 'No',
          medicalHistory: '',
        });
        setUploadedFiles([]);

        // Use navigate instead of window.location
        setTimeout(() => {
          navigate('/dashboard'); // Make sure '/dashboard' route exists
        }, 2000);
      }

    } catch (error) {
      console.error('Booking error:', error);
      
      if (error.response) {
        // Server responded with error
        if (error.response.status === 404) {
          setError('API endpoint not found. Please check backend server.');
        } else {
          setError(error.response.data.message || 'Booking failed. Please try again.');
        }
      } else if (error.request) {
        // Request made but no response
        setError('Backend server is not responding. Please check if server is running.');
      } else {
        // Other errors
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Check if backend server is running
  const checkBackend = async () => {
    try {
      await axios.get('http://localhost:5000/api/health');
    } catch (error) {
      setError('Backend server is not running. Please start your backend server.');
    }
  };

  // Check backend on component mount
  useEffect(() => {
    checkBackend();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Book a consultation</h1>
          <p className="text-gray-600">
            Connecting people or medically challenged individuals to the right hospitals
          </p>
        </div>

        {/* Progress Steps - FIXED: Added proper routing */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            {/* Step 1 */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/register')}>
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 font-medium">
                1
              </div>
              <span className="ml-3 text-gray-500 font-medium">Register</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
            
            {/* Step 2 */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/confirm')}>
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 font-medium">
                2
              </div>
              <span className="ml-3 text-gray-500 font-medium">Confirm</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
            
            {/* Step 3 (Current) */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                3
              </div>
              <span className="ml-3 text-gray-900 font-medium">Consultation</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Consultation information</h2>
          <p className="text-gray-600 mb-8">
            Connecting people or medically challenged individuals to the right hospitals
          </p>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Choose Service */}
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-3">
                Choose Service *
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="general-consultation">General Consultation</option>
                  <option value="specialist-referral">Specialist Referral</option>
                  <option value="surgery-planning">Surgery Planning</option>
                  <option value="second-opinion">Second Opinion</option>
                  <option value="emergency-care">Emergency Care</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Country of Residence */}
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-3">
                Country of residence *
              </label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="south-africa">South Africa</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Prisonholder */}
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-3">
                Prisonholder
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="prisonholder"
                    value="Yes"
                    checked={formData.prisonholder === "Yes"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="prisonholder"
                    value="No"
                    checked={formData.prisonholder === "No"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Medical History */}
            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-3">
                Medical history *
              </label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleInputChange}
                placeholder="Tell us about your medical history. We want to know how you got here so we can help you better."
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Upload Medical Report */}
            <div className="mb-8">
              <label className="block text-gray-900 font-semibold mb-1">
                Upload medical report
              </label>
              <p className="text-sm text-gray-500 mb-3">You can add more than one</p>
              
              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Upload className="text-blue-500" size={24} />
                    </div>
                    <p className="text-gray-900 font-medium mb-1">Tap here to upload</p>
                    <p className="text-sm text-gray-500">Max. File size: 5MB</p>
                    <p className="text-xs text-gray-400 mt-1">Supported: PDF, DOC, JPG, PNG</p>
                  </div>
                </label>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Uploaded files:</p>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            <Upload className="text-blue-500" size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">{file.name}</p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors ${
                loading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-blue-600'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Confirm booking'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}