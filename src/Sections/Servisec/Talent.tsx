import React from "react";

const Talent: React.FC = () => {
    return (
        <>
            {/* Featured Talents Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-ruby text-center mb-8">
                Featured Talent Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                {/* Talent Card #1 - Associate Package */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 text-center">
                        Associate Package
                    </h3>
                    <p className="text-sm text-center text-ruby font-semibold mb-4">
                        Starting from $500
                    </p>
                    <div className="mb-5 text-center">
                        <p className="text-gray-600 text-sm mb-4">
                            The Associate Package offers high-quality talents for entry-level and associate positions, perfect for growing teams.
                        </p>

                        <p className="text-gray-800 text-md">💼 Included Services:</p>

                        <ul className="space-y-0.5 mt-2">
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Efficient Candidate Screening
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Basic Skill Assessment
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Onboarding Support
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Standard Background Check
                            </li>
                        </ul>
                    </div>

                    <button className="bg-ruby text-white px-4 py-2 w-full rounded hover:bg-blue-950 transition">
                        Start Now
                    </button>
                </div>

                {/* Talent Card #2 - Manager Package */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 text-center">
                        Manager Package
                    </h3>
                    <p className="text-sm text-center text-ruby font-semibold mb-4">
                        Starting from $1,000
                    </p>
                    <div className="mb-5 text-center">
                        <p className="text-gray-600 text-sm mb-4">
                            The Manager Package is designed for businesses seeking experienced managers who can lead teams and drive company goals.
                        </p>

                        <p className="text-gray-800 text-md">💼 Included Services:</p>

                        <ul className="space-y-0.5 mt-2">
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Targeted Talent Acquisition
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Comprehensive Leadership Assessment
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Personalized Candidate Consultation
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Advanced Skill Testing
                            </li>
                        </ul>
                    </div>

                    <button className="bg-ruby text-white px-4 py-2 w-full rounded hover:bg-blue-950 transition">
                        Start Now
                    </button>
                </div>

                {/* Talent Card #3 - Executive Package */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 text-center">
                        Executive Package
                    </h3>
                    <p className="text-sm text-center text-ruby font-semibold mb-4">
                        Starting from $2,500
                    </p>
                    <div className="mb-5 text-center">
                        <p className="text-gray-600 text-sm mb-4">
                            The Executive Package is tailored for companies needing high-quality executive and managerial talents with strong leadership.
                        </p>

                        <p className="text-gray-800 text-md">💼 Included Services:</p>

                        <ul className="space-y-0.5 mt-2">
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Strategic Talent Sourcing
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Advanced Screening & Assessment
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Personalized Consultation
                            </li>
                            <li className="text-sm text-gray-600">
                                <span className="text-ruby">✔</span> Leadership Evaluation
                            </li>
                        </ul>
                    </div>

                    <button className="bg-ruby text-white px-4 py-2 w-full rounded hover:bg-blue-950 transition">
                        Start Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Talent;
