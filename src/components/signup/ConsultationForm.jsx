import React, { useState } from 'react';
import { ChevronDown, Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { consultationAPI } from '../services/api';

export default function ConsultationForm() {
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    const validFiles = files.filter(file => file.size <= 5 * 1024 * 1024);
    
    if (validFiles.length !== files.length) {
      setError('Some files exceed the 5MB size limit');
      return;
    }

    const totalFiles = uploadedFiles.length + validFiles.length;
    if (totalFiles > 5) {
      setError('Maximum 5 files allowed');
      return;
    }

    setUploadedFiles([...uploadedFiles, ...validFiles]);
    setError('');
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please login first');
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const submissionData = new FormData();
      
      submissionData.append('service', formData.service);
      submissionData.append('country', formData.country);
      submissionData.append('prisonholder', formData.prisonholder);
      submissionData.append('medicalHistory', formData.medicalHistory);
      
      uploadedFiles.forEach(file => {
        submissionData.append('medicalReports', file);
      });

      const response = await consultationAPI.bookConsultation(submissionData);

      if (response.data.success) {
        setSuccess('Consultation booked successfully! Redirecting to Homepage...');
        
        setFormData({
          service: '',
          country: '',
          prisonholder: 'No',
          medicalHistory: '',
        });
        setUploadedFiles([]);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }

    } catch (error) {
      console.error('Booking error:', error);
      
      if (error.response) {
        if (error.response.status === 401) {
          setError('Session expired. Please login again.');
          setTimeout(() => navigate('/login'), 2000);
        } else if (error.response.status === 404) {
          setError('API endpoint not found. Please contact support.');
        } else {
          setError(error.response.data.message || 'Booking failed. Please try again.');
        }
      } else if (error.request) {
        setError('Cannot connect to server. Please check your internet connection.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pd-32 pt-32 sm:py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Book a consultation
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Connecting people to the right hospitals
          </p>
        </div>

        {/* Stepper - Responsive */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex items-center gap-1 sm:gap-4">
            {/* Step 1 */}
            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 font-medium text-xs sm:text-sm cursor-pointer hover:border-gray-400"
                onClick={() => navigate('/book-consultation')}
              >
                1
              </div>
              <span className="text-gray-500 font-medium text-xs sm:text-sm">Register</span>
            </div>

            {/* Line 1 */}
            <div className="w-4 sm:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>
            
            {/* Step 2 */}
            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 font-medium text-xs sm:text-sm cursor-pointer hover:border-gray-400"
                onClick={() => navigate('/verify-otp')}
              >
                2
              </div>
              <span className="text-gray-500 font-medium text-xs sm:text-sm">Confirm</span>
            </div>

            {/* Line 2 */}
            <div className="w-4 sm:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>
            
            {/* Step 3 */}
            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-xs sm:text-sm">
                3
              </div>
              <span className="text-gray-900 font-medium text-xs sm:text-sm">Consultation</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Consultation information
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            Connecting people to the right hospitals
          </p>

          {success && (
            <div className="mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm sm:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-6">
            {/* Service Dropdown */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Choose Service *
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="general-consultation">General Consultation</option>
                  <option value="specialist-referral">Specialist Referral</option>
                  <option value="surgery-planning">Surgery Planning</option>
                  <option value="second-opinion">Second Opinion</option>
                  <option value="emergency-care">Emergency Care</option>
                </select>
                <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Country of residence *
              </label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Radio Buttons */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Prisonholder
              </label>
              <div className="flex gap-6 sm:gap-8">
                <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="prisonholder"
                    value="Yes"
                    checked={formData.prisonholder === "Yes"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm sm:text-base">Yes</span>
                </label>
                <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="prisonholder"
                    value="No"
                    checked={formData.prisonholder === "No"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm sm:text-base">No</span>
                </label>
              </div>
            </div>

            {/* Medical History */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Medical history *
              </label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleInputChange}
                placeholder="Tell us about your medical history..."
                rows={5}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1 text-sm sm:text-base">
                Upload medical report
              </label>
              <p className="text-xs sm:text-sm text-gray-500 mb-3">You can add up to 5 files (max 5MB each)</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  disabled={uploadedFiles.length >= 5}
                />
                <label htmlFor="file-upload" className={uploadedFiles.length >= 5 ? 'cursor-not-allowed' : 'cursor-pointer'}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Upload className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">
                      {uploadedFiles.length >= 5 ? 'Maximum files reached' : 'Tap here to upload'}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Max. File size: 5MB</p>
                    <p className="text-xs text-gray-400 mt-1">Supported: PDF, DOC, DOCX, JPG, PNG</p>
                  </div>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Uploaded files: ({uploadedFiles.length}/5)</p>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg text-xs sm:text-sm">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded flex-shrink-0 flex items-center justify-center">
                            <Upload className="text-blue-500 w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-gray-700 truncate">{file.name}</p>
                            <p className="text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 flex-shrink-0 ml-2"
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
              className={`w-full bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-colors mt-8 ${
                loading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
