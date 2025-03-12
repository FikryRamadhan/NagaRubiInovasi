import { IconAB2, IconGlobe, IconUsers, IconUserScan } from "@tabler/icons-react";
import Card from "../../Components/Card";

const Solution: React.FC = () => {
    const cardData = [
        {
            id: 1,
            label: 'High Quality Talent',
            icon: <IconUserScan size={40} className="text-ruby mb-2" />,
        },
        {
            id: 2,
            label: 'Recruitment Innovation',
            icon: <IconAB2 size={40} className="text-ruby mb-2" />,
        },
        {
            id: 3,
            label: 'Personalized Approach',
            icon: <IconUsers size={40} className="text-ruby mb-2" />,
        },
        {
            id: 4,
            label: 'Global Professional',
            icon: <IconGlobe size={40} className="text-ruby mb-2" />,
        }

    ];

    return (
        <>
            <div className="text-center mb-8">
                <h1 className="sm:text-2xl text-xl lg:text-3xl font-bold text-ruby">
                    Our Key Strengths
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    Discover what sets us apart in delivering exceptional talent and innovative recruitment solutions.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <Card key={card.id} icon={card.icon} label={card.label} />
                ))}
            </div>
        </>
    );
};


export default Solution