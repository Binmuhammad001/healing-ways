import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/home/hero";
import StatsSection from "../components/home/statistics_sec";
import Section2 from "../components/home/section2";
import ServicesSection from "../components/home/services"
import Section3 from "../components/home/section3";
import Section4 from "../components/home/section4";
import Section6 from "../components/home/section6";
import Section7 from "../components/home/section7";
import Section8 from "../components/home/section8";



export default function App(){
    return(
        <>
    <Navbar/>
    <Hero/>
    <StatsSection/>
    <Section2/>
    <ServicesSection/>
    <Section3/>
    <Section4/>
    <Section6/>
    <Section7/>
    <Section8/>
      <Footer/>

            </>
        )
}
