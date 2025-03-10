import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Sections/Contact/Hero'
import StatsSection from '../Sections/Contact/Stats'
import Team from '../Sections/Contact/Team'
import Contact from '../Sections/Contact/Contact'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="md:px-25 sm:px-10 px-5 my-10">
        <Hero />
        <StatsSection />
        <Team />
        <Contact/>
      </div>
      <Footer />
    </>
  )
}

export default About