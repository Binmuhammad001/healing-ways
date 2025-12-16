import React from 'react';
import Navbar from '../components/navbar';
import ConsultationForm from '../components/signup/ConsultationForm';
import Footer from '../components/footer';



export default function App(){
    return(
        <>
        <Navbar/>
        <ConsultationForm/>
        <Footer/>
        </>
    )
}