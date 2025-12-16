import react from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/services/med_hero';
import Section1 from '../components/services/med_section1';
import Section2 from '../components/services/med_section2';
import Section3 from '../components/services/med_section3';
import Section4 from '../components/services/med_section4';
import Section5 from '../components/services/med_section5';
import Section6 from '../components/services/med_section6';

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
        <Section6/>
        <Footer/>
        </>
    )
}