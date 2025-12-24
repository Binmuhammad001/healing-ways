import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact/contact';
import Location from '../components/contact/location';

export default function App(){
    return(
       <>
       <Navbar/>
       <Contact/>
       <Location/>
       <Footer/>
       </> 
    )
}
