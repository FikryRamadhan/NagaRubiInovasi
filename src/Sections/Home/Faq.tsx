import React, { useState } from 'react'

const Faq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What is RubiTalent?',
            answer: 'RubiTalent is a platform that connects you with high-quality talent to meet your diverse business needs.'
        },
        {
            question: 'How can I join RubiTalent?',
            answer: 'You can sign up on our website by following the simple registration process provided.'
        },
        {
            question: 'Does RubiTalent offer specialized services?',
            answer: 'Yes, we provide tailored services to fit your requirements, including consultation and talent development.'
        },
        {
            question: 'How does RubiTalent ensure the quality of its talent?',
            answer: 'We implement a rigorous screening process that verifies skills, experience, and cultural fit, ensuring you only work with top-tier professionals.'
        }
    ];
    

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* FAQ Section */}
            <div className="mt-10 ">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">FAQ</h3>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-center flex justify-between  md:text-lg text-sm text-gray-700 focus:outline-none"
                        >
                            {faq.question}
                            <span className="ml-2 text-gray-500">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-600">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Faq