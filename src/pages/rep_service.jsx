import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/services/rep_hero';
import Section1 from '../components/services/rep_section1';
import Section2 from '../components/services/rep_section2';
import Section3 from '../components/services/rep_section3';
import Section4 from '../components/services/rep_section4';



export default function App(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Section1/> 
        <Footer/>
        </>
    )
}
