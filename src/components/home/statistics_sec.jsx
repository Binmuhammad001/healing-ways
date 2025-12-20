import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "8+", label: "Medical tourism experience" },
    { number: "10+", label: "Countries" },
    { number: "30+", label: "Top hospitals" },
    { number: "100+", label: "Medical consultants" },
    { number: "800", label: "Hotel bookings" }
  ];

  return (
    <section className="bg-[#137EE8] py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-blue-100 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
