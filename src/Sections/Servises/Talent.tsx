import { useEffect, useRef } from "react";
import TalentCard from "../../Components/TalentCard";

const Talent: React.FC = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft =
                containerRef.current.scrollWidth / 2 -
                containerRef.current.clientWidth / 2;
        }
    }, []);

    const talentPackages = [
        {
            title: "Associate Package",
            price: "$500",
            description:
                "The Associate Package offers high-quality talents for entry-level and associate positions, perfect for growing teams.",
            services: [
                "Efficient Candidate Screening",
                "Basic Skill Assessment",
                "Onboarding Support",
                "Standard Background Check",
            ],
        },
        {
            title: "Manager Package",
            price: "$1,000",
            description:
                "The Manager Package is designed for businesses seeking experienced managers who can lead teams and drive company goals.",
            services: [
                "Targeted Talent Acquisition",
                "Comprehensive Leadership Assessment",
                "Personalized Candidate Consultation",
                "Advanced Skill Testing",
            ],
        },
        {
            title: "Executive Package",
            price: "$2,500",
            description:
                "The Executive Package is tailored for companies needing high-quality executive and managerial talents with strong leadership.",
            services: [
                "Strategic Talent Sourcing",
                "Advanced Screening & Assessment",
                "Personalized Consultation",
                "Leadership Evaluation",
            ],
        },
    ];

    return (
        <>
            <h2 className="text-xl md:text-2xl font-bold text-ruby text-center mb-5">
                Featured Talent Packages
            </h2>
            <div className="overflow-x-auto" ref={containerRef}>
                <div className="grid grid-cols-3 gap-6 mb-12 min-w-[768px]">
                    {talentPackages.map((packageData, index) => (
                        <TalentCard key={index} {...packageData} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Talent;