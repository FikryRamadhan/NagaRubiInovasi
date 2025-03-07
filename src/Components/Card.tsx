import React from "react";

interface SolutionCardProps {
    icon: React.ReactNode;
    label: string;
}

const Card: React.FC<SolutionCardProps> = ({ icon, label }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
            {icon}
            <p className="text-gray-600 font-semibold">{label}</p>
        </div>
    );
};

export default Card