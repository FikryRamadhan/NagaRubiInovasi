import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { IconShoppingBagCheck } from "@tabler/icons-react";
import toast from "react-hot-toast";

interface Service {
    id: number;
    name: string;
    price: number;
}

const services: Service[] = [
    // Layanan Kategori 1
    {
        id: 1,
        name: 'Create job ad',
        price: 500000
    },
    {
        id: 2,
        name: 'Run job ad',
        price: 700000
    },
    {
        id: 3,
        name: 'Filter 100 candidate',
        price: 1000000
    },
    {
        id: 4,
        name: 'Survey 100 candidates',

        price: 1200000
    },
    {
        id: 5,
        name: 'Interview 10 candidates',
        price: 1500000
    },
    {
        id: 6,
        name: 'Administer skill test',
        price: 800000
    },
    {
        id: 7,
        name: 'Large Private Office 1 Month',
        price: 1000000
    },

    // Layanan Kategori 2
    {
        id: 8,
        name: 'Co-working seat 1 week',
        price: 300000
    },
];

const OurServices: React.FC = () => {
    const { addToCart, cart } = useCart();

    const handleAddToCart = (service: Service) => {
        const itemAlreadyInCart = cart.find((item) => item.id === service.id);

        if (itemAlreadyInCart) {
            toast.error("Service already in cart", {
                position: "top-right",
            });
            return;
        }
        addToCart({
            ...service,
            selected: true,
        });
        toast.success("Service added to cart", {
            position: "top-right",
        });
        return
    };

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-5">
                Our Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-5">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="relative bg-gray-50 rounded-lg shadow p-2 flex flex-col items-start transition-transform duration-300 hover:shadow-lg"
                    >
                        <h3 className="text-gray-800 font-semibold text-md">
                            {service.name}
                        </h3>

                        <button
                            onClick={() => handleAddToCart(service)}
                            className="mt-2 bg-ruby/90 text-white py-2 px-2 rounded-lg transition-opacity duration-300 opacity-90 hover:opacity-100"
                        >
                            <IconShoppingBagCheck size={15} />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OurServices;
