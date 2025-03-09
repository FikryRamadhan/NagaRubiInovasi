import React from 'react'

const OurServices = () => {
    return (
        <>
            {/* Our Services Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Service Card #1 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">
                        Photography
                    </h3>
                    <p className="text-gray-600">
                        Professional photography services for all occasions.
                    </p>
                </div>

                {/* Service Card #2 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">
                        Videography
                    </h3>
                    <p className="text-gray-600">
                        High-quality video production services.
                    </p>
                </div>

                {/* Service Card #3 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">
                        Design
                    </h3>
                    <p className="text-gray-600">
                        Creative design solutions for your brand.
                    </p>
                </div>

                {/* Service Card #4 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">
                        Marketing
                    </h3>
                    <p className="text-gray-600">
                        Strategic marketing campaigns to grow your business.
                    </p>
                </div>
            </div>
        </>
    )
}

export default OurServices