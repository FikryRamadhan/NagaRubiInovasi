import React from "react";

interface TalentCardProps {
  title: string;
  price: string;
  description: string;
  services: string[];
  phoneNumber?: string;
}

const TalentCard: React.FC<TalentCardProps> = ({
  title,
  price,
  description,
  services,
  phoneNumber = "6283823115994", // Nomor default jika tidak disediakan
}) => {
  // Membuat pesan WhatsApp secara dinamis
  const waMessage = `Hello, I am interested in the ${title} service. Can you provide more information?`;

  // Membuat URL WhatsApp dengan encodeURIComponent untuk keamanan
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  // Fungsi untuk membuka WhatsApp di tab baru saat tombol diklik
  const openWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah aksi klik pada kartu
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col min-w-[250px] hover:shadow-2xl transition">
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
      
      {/* Tombol "Start Now" dengan event onClick */}
      <button
        type="button"
        className="bg-ruby text-white px-4 py-2 w-full rounded hover:bg-blue-950 transition"
        onClick={openWhatsApp}
      >
        Start Now
      </button>
    </div>
  );
};

export default TalentCard;
