import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Caraousel'
import Solution from '../Sections/Home/Solution';
import Footer from '../Components/Footer';

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
                    alt="Teknologi 3"
                    className="w-full h-full"
                />
            ),
        },
    ];
    return (
        <>
            <Navbar />
            <div className='pt-20 px-5 sm:px-20 md:px-25'>
                <Carousel carousel={carousel} />

                <div className="mt-10">
                    <Solution />
                </div>

            </div>
            <div className="mt-10">
                <Footer />
            </div>
        </>
    )
}

export default Home