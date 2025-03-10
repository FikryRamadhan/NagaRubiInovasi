import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "1.png",
      description: "15+ years in talent management and industry leadership",
    },
    {
      name: "Michael Chen",
      role: "Head of Talent",
      image: "2.png",
      description: "Former casting director with extensive industry network",
    },
    {
      name: "Thompson",
      role: "Client Relations Director",
      image: "3.png",
      description: "Specialized in talent development and brand partnerships",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-8 text-ruby">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-gray-50 hover:shadow-xl p-6 rounded-2xl shadow-md w-72"
          >
            <img className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4" src={"/images/talent/"+ member.image}></img>
            <h3 className="text-md md:text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-500 mb-1 text-sm md:text-md">{member.role}</p>
            <p className="text-gray-600 text-sm md:text-md">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
