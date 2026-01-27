import React from 'react';
import Hero from '../components/about/Hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Section1 from '../components/about/section1';
import Section2 from '../components/about/section2';
import Section3 from '../components/about/section3';
import Section4 from '../components/abput/section4';



export default function App() {
    return(
        <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Section4/>
        <Section2/>
        <Section3/>
        <Footer/>
        </>
    )
}
