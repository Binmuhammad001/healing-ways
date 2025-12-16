import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import img from '../../assets/med_img2.jpg';

export default function RegionsListSection() {
  const regions = [
    {
      name: "Asia",
      description: "Secretsreme supports Level 1 merchants and service providers<br/>who need a Report on Compliance (RoC), as well as organizations<br/>that need to complete a PCI DSS SAQ.",
      image: img
    },
    {
      name: "Africa",
      description: "Secretsreme supports Level 1 merchants and service providers<br/>who need a Report on Compliance (RoC), as well as organizations<br/>that need to complete a PCI DSS SAQ.",
      image: img
    },
    {
      name: "South America",
      description: "Secretsreme supports Level 1 merchants and service providers<br/>who need a Report on Compliance (RoC), as well as organizations<br/>that need to complete a PCI DSS SAQ.",
      image: img
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Secureframe supports Level 1 merchants and service providers<br/>
            who need a Report on Compliance (RoC), as well as organizations
          </p>
        </div>

        {/* Regions List */}
        <div className="space-y-4">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-6"
            >
              {/* Left side - Icon and Content */}
              <div className="flex items-start gap-5 flex-1">
                {/* Arrow Icon */}
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-blue-600" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {region.name}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: region.description }}
                  />
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex-shrink-0 hidden md:block">
                <img 
                  src={region.image}
                  alt={region.name}
                  className="w-32 h-24 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}