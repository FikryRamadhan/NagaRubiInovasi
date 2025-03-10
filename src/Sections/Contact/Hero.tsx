import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-2xl md:text-5xl font-bold mb-4 text-ruby">
        Connecting Exceptional Talent with Outstanding Opportunities
      </h1>
      <p className="text-md text-gray-600 mb-8">
        We're a leading talent agency dedicated to representing and nurturing
        the careers of extraordinary individuals across various industries.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-ruby text-white md:px-6 md:py-2 px-4 py-2 rounded-md hover:shadow-2xl">
          Join Our Roster
        </button>
        <button className="border border-gray-400 px-6 py-2 rounded-md hover:shadow-2xl">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
