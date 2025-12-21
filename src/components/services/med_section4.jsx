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
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            Secureframe supports Level 1 merchants and service providers<br/>
            who need a Report on Compliance (RoC), as well as organizations
          </p>
        </div>

        {/* Regions List */}
        <div className="space-y-4">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 md:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6"
            >
              {/* Left side - Icon and Content */}
              <div className="flex items-start md:items-center gap-4 md:gap-5 flex-1 w-full">
                {/* Arrow Icon */}
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-blue-600" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {region.name}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: region.description }}
                  />
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
                <img 
                  src={region.image}
                  alt={region.name}
                  className="w-full max-w-xs md:w-32 md:h-24 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
