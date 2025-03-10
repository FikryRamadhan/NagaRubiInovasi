import React from 'react';

const WhyToUse: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center bg-white">
            <div className="flex-1 flex justify-center items-center mb-10 md:mr-10">
                <img
                    src="/images/bingung.png"
                    alt="Why Choose Rubi Talent?"
                    className="object-center w-full"
                />
            </div>

            <div className="flex-1 space-y-2">
                <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-ruby">
                    Why Choose Rubi Talent?
                </h2>
                <p className="text-md md:text-md lg:text-lg text-gray-600">
                    Rubi Talent offers innovative solutions to meet your company’s HR needs.
                    Through a vast network of professionals, stringent selection processes, and flexible services,
                    we help you find high-quality candidates quickly and efficiently.
                </p>
                <ul className="space-y-1">
                    <li className="text-md md:text-md lg:text-lg text-gray-600">
                        <span className="text-ruby">✔</span> Extensive professional network across various fields
                    </li>
                    <li className="text-md md:text-md lg:text-lg text-gray-600">
                        <span className="text-ruby">✔</span> Rigorous recruitment process ensuring quality
                    </li>
                    <li className="text-md md:text-md lg:text-lg text-gray-600">
                        <span className="text-ruby">✔</span> Flexible services tailored to your company’s needs
                    </li>
                    <li className="text-md md:text-md lg:text-lg text-gray-600">
                        <span className="text-ruby">✔</span> Save time and reduce recruitment costs
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhyToUse;
