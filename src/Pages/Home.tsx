import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Caraousel'
import Solution from '../Sections/Home/Solution';
import Footer from '../Components/Footer';
import WhyToUse from '../Sections/Home/WHyToUse';
import Faq from '../Sections/Home/Faq';

const Home = () => {
    const carousel = [
        {
            id: 1,
            content: (
                <img
                    src="/carousels/1.png"
                    alt="Kelas Bisnis"
                    className="w-full h-full"
                />
            ),
        },
        {
            id: 2,
            content: (
                <img
                    src="/carousels/2.png"
                    alt="Kelas "
                    className="w-full h-full"
                />
            ),
        },
        {
            id: 3,
            content: (
                <img
                    src="/carousels/3.png"
                    alt="Jasa Website"
                    className="w-full h-full"
                />
            ),
        },
    ];
    return (
        <>
            <Navbar />
            <div className='pt-20 lg:px-25 md:px-10 px-5'>
                <Carousel carousel={carousel} />

                <div className="mt-15">
                    <Solution />
                </div>

                <div className="mt-15">
                    <WhyToUse />
                </div>

                <div className="mt-15">
                    <Faq />
                </div>

            </div>
            <div className="mt-10">
                <Footer />
            </div>
        </>
    )
}

export default Home