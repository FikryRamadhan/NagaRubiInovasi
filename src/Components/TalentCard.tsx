// Komponen TalentCard untuk menampilkan setiap kartu secara dinamis
const TalentCard = ({ title, price, description, services }) => (
    <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col min-w-[250px] hover:shadow-2xl">
        <h3 className="text-gray-800 font-semibold text-lg mb-1 text-center">
            {title}
        </h3>
        <p className="text-sm text-center text-ruby font-semibold mb-4">
            Starting from {price}
        </p>
        <div className="mb-5 text-center">
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <p className="text-gray-800 text-md">💼 Included Services:</p>
            <ul className="space-y-0.5 mt-2">
                {services.map((service, index) => (
                    <li key={index} className="text-sm text-gray-600">
                        <span className="text-ruby">✔</span> {service}
                    </li>
                ))}
            </ul>
        </div>
        <button className="bg-ruby text-white px-4 py-2 w-full rounded hover:bg-blue-950 transition">
            Start Now
        </button>
    </div>
);

export default TalentCard