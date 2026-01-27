import React from 'react';

export default function PrinciplesSection() {
  const principles = [
    {
      title: "Compassion",
      description: "Demonstrating empathy and care towards individuals facing medical challenges, prioritizing their well-being and comfort throughout their healthcare journey."
    },
    {
      title: "Integrity",
      description: "Upholding honesty, transparency, and ethical standards in all interactions, ensuring trustworthiness and reliability for clients and stakeholders."
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards of quality and expertise in healthcare services, partnering with top hospitals and professionals to deliver optimal outcomes for clients."
    },
    {
      title: "Empowerment",
      description: "Empowering individuals to make informed decisions about their health by providing them with knowledge, resources, and support, enabling them to take control of their healthcare journey."
    }
  ];

  return (
    <section className="bg-[#FFFFFF] py-15 md:py-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-[#F0F4FA] rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Core Values
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
