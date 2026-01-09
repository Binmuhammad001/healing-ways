import React from 'react';
import Hero from '../components/services/acc_hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Section1 from '../components/services/acc_section1';
import Section2 from '../components/services/acc_section2';
import Section3 from '../components/services/acc_section3';
import Section4 from '../components/services/acc_section4';


export default function App(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Section2/>
     
        <Section4/>
        <Footer/>
        </>
    )
}

