import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="flex flex-wrap justify-center text-center gap-8 py-16">
      {[
        { title: 500, description: "Active Talents" },
        { title: 1000, description: "Successful Placements" },
        { title: 15, description: "Years Experience" },
        { title: 50, description: "Partner Companies" },
      ].map((stat, index) => (
        <div key={index}>
          <h2 className="text-ruby text-xl sm:text-2xl md:text-4xl font-bold">
            {inView ? (
              <CountUp start={0} end={stat.title} duration={2} separator="," />
            ) : (
              "0"
            )}
            {stat.description === "Years Experience" ? "+" : ""}
          </h2>
          <p className="text-gray-600">{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
