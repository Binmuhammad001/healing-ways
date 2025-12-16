import React from 'react';

export default function PrinciplesSection() {
  const principles = [
    {
      title: "Question the standards",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged"
    },
    {
      title: "The details matter",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged"
    },
    {
      title: "Hiring is for everyone",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged"
    },
    {
      title: "Start with simple",
      description: "Connecting people or medically challenged individuals to the right hospitals both locally and internationally to receive the best possible Connecting people or medically challenged"
    }
  ];

  return (
    <section className="bg-[#FFFFFF] py-15 md:py-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-[#F0F4FA] rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our principles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {principles.map((principle, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}