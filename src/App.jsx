import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext"; 
 
// Existing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/contact';
import Rep_service from './pages/rep_service';
import Med_service from './pages/med_service';
import Con_service from './pages/con_service';
import Acc_service from './pages/acc_service';
import Signup from './pages/signup';
import Login from './pages/login';
import BookConsultationForm from './components/signup/signup_form';
import VerifyOTP from './pages/otp';  
import ConsultationForm from "./pages/consultation";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Dashboard pages
import PatientDashboard from './pages/PatientDashboard';
import MyConsultations from './pages/MyConsultations';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Public Route Component (redirect if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    // Redirect to appropriate dashboard if already logged in
    return <Navigate to={isAdmin() ? "/admin/dashboard" : "/dashboard"} replace />;
  }

  return children;
};

function AppRoutes() {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rep_service" element={<Rep_service />} />
      <Route path="/med_service" element={<Med_service />} />
      <Route path="/con_service" element={<Con_service />} />
      <Route path="/acc_service" element={<Acc_service />} />

      {/* Auth Routes (redirect if already logged in) */}
      <Route 
        path="/signup" 
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } 
      />
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />
      <Route 
        path="/register" 
        element={
          <PublicRoute>
            <BookConsultationForm />
          </PublicRoute>
        } 
      />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected Patient Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            {isAuthenticated && isAdmin() ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <PatientDashboard />
            )}
          </ProtectedRoute>
        } 
      />
      
      {/* My Consultations - Patient only */}
      <Route 
        path="/my-consultations" 
        element={
          <ProtectedRoute>
            {isAuthenticated && isAdmin() ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <MyConsultations />
            )}
          </ProtectedRoute>
        } 
      />
      
      {/* Book Consultation - Protected route */}
      <Route 
        path="/consultation" 
        element={
          <ProtectedRoute>
            <ConsultationForm />
          </ProtectedRoute>
        } 
      />

      {/* Protected Admin Routes */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requireAdmin>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />

      {/* Catch all - redirect to home or dashboard */}
      <Route 
        path="*" 
        element={
          isAuthenticated ? (
            <Navigate to={isAdmin() ? "/admin/dashboard" : "/dashboard"} replace />
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
