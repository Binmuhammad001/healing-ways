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
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Hotel Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {hotels.map((hotel, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Hotel Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hotel Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-900">
                      {hotel.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-blue-600 font-bold text-base">{hotel.price}</p>
                      <p className="text-gray-500 text-xs">{hotel.priceLabel}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Affordable, World-Class Medical Care
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your.
              </p>
              <p>
                We are committed to making your medical tourism journey a success, from initial consultation to post-treatment follow-up. Let us help you achieve your.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}