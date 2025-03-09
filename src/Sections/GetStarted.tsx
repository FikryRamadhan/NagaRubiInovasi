import React from 'react';

const GetStarted: React.FC = () => {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6 text-center">
                Connect with our talented professionals and take your project to the next level
            </p>
            <button className="bg-ruby text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Contact Us
            </button>
        </section>
    );
};

export default GetStarted;
