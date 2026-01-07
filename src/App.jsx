import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
import { AuthProvider } from "./context/AuthContext";



function App(){
    return(
        <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/rep_service" element={<Rep_service/>} />
                <Route path="/med_service" element={<Med_service/>}/>
                <Route path="/con_service" element={<Con_service/>}/>
                <Route path="/acc_service" element={<Acc_service/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<BookConsultationForm />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/consultation-form" element={<ConsultationForm />} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}


export default App;
