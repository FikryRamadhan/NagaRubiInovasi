import React from 'react'
import Carousel from '../Components/Caraousel'
import Navbar from '../Components/Navbar'
import Talent from '../Sections/Servisec/Talent'
import OurServices from '../Sections/Servisec/OurServices'
import Footer from '../Components/Footer'
import GetStarted from '../Sections/GetStarted'

const Services = () => {
  const carousel = [
    {
        id: 1,
        content: (
            <img
                src="/images/service.png"
                alt="Kelas Bisnis"
                className="w-full h-full"
            />
        ),
    },
  ]
  return (
    <>
      <Navbar />
      <div className='pt-20 lg:px-25 md:px-10 px-5 mb-10'>
        <Carousel carousel={carousel} />
        <div className="mt-10">
          <Talent />
        </div>
        <div className="mt-10">
          <OurServices />
        </div>
        <div className="mt-10">
          <GetStarted />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services