import React from 'react';
import Hero from '../components/services/con_hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Section1 from '../components/services/con_section1';
import Section2 from '../components/services/con_section2';
import Section3 from '../components/services/con_section3';
import Section4 from '../components/services/con_section4';
import Section5 from '../components/services/con_section5';



export default function App(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
        </>
    )
}
