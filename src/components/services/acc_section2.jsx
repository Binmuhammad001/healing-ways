import React from "react";
import { MapPin } from "lucide-react";
import Img from "../../assets/acc_img.jpg";

export default function HotelAccommodationSection() {
  const hotels = [
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    },
    {
      name: "Hotel Folen",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "$140",
      image: Img
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Affordable, World-Class Medical Care
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We are committed to making your medical tourism journey a success,
            from initial consultation to post-treatment follow-up. Let us help
            you achieve your healthcare goals comfortably.
          </p>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{hotel.location}</span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {hotel.description}
                </p>

                <div className="flex items-baseline gap-1 mt-auto">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">
                    {hotel.price}
                  </span>
                  <span className="text-xs text-gray-500">per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
