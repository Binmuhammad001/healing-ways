import React from 'react';
import { MapPin } from 'lucide-react';
import Img from '../../assets/acc_img.jpg';


export default function HotelAccommodationSection() {
  const hotels = [
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description: "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano",
      price: "$140",
      image: Img
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Affordable,<br />
            World-Class Medical Care
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            We are committed to making your medical tourism journey a success, from<br />
            initial consultation to post-treatment follow-up. Let us help you achieve your
          </p>
        </div>

        {/* Hotel Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Hotel Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{hotel.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  {hotel.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                  <span className="text-xs text-gray-500">Per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}