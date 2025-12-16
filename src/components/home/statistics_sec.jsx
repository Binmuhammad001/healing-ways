import React from 'react';

export default function StatsSection() {
  const stats = [
    { number: '8+', label: 'Medical tourism experience' },
    { number: '10+', label: 'Countries' },
    { number: '30+', label: 'Top hospitals' },
    { number: '100+', label: 'Medical consultants' },
    { number: '800', label: 'Hotel bookings' }
  ];

  return (
    <section className="bg-[#137EE8] py-12 md:py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base text-blue-100 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}