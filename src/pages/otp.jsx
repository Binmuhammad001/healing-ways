import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Otp from '../components/signup/VerifyOTP';



export default function App(){
    return(
        <>
        <Navbar/>
        <Otp/>
        <Footer/>
        </>
    )
}