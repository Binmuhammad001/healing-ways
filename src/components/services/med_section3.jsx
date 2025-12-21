import React from 'react';
import { MapPin } from 'lucide-react';
import img from '../../assets/med_img.jpg'

export default function HotelListingsSection() {
  const hotels = [
    {
      name: "Hotel Folen",
      location: "India",
      price: "$140",
      priceLabel: "Per night",
      image: img
    },
    {
      name: "Hotel Folen",
      location: "India",
      price: "$140",
      priceLabel: "Per night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
    },
    {
      name: "Hotel Folen",
      location: "India",
      price: "$140",
      priceLabel: "Per night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
    },
    {
      name: "Hotel Folen",
      location: "India",
      price: "$140",
      priceLabel: "Per night",
      image: img
    }
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left side - Hotel Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {hotels.map((hotel, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Hotel Image */}
                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hotel Info */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                      {hotel.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-blue-600 font-bold text-sm sm:text-base">{hotel.price}</p>
                      <p className="text-gray-500 text-xs">{hotel.priceLabel}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
              Experience Affordable, World-Class Medical Care
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your goals.
              </p>
              <p>
                We ensure the best medical experience, connecting you to top hospitals locally and internationally, while making your stay comfortable and affordable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
