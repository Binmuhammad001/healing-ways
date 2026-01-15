import React from "react";
import { MapPin, Home, Building2 } from "lucide-react";
import Img from "../../assets/acc_img.jpg";

export default function HotelAccommodationSection() {
  const guestHouses = [
    {
      name: "Single Room",
      type: "Guest House",
      location: "Near Hospital District",
      description:
        "Private single room with access to shared kitchen and private bathroom. Perfect for patients seeking independence during recovery.",
      price: "$25-35",
      features: ["Kitchen Access", "Private Bathroom", "Single Occupancy"],
      image: Img
    },
    {
      name: "Private Studio",
      type: "Guest House",
      location: "Near Hospital District",
      description:
        "Self-contained studio apartment with kitchenette and private bathroom. Ideal for extended stays with complete privacy.",
      price: "$25-35",
      features: ["Kitchenette", "Private Bathroom", "Full Privacy"],
      image: Img
    },
    {
      name: "Shared Apartment",
      type: "Guest House",
      location: "Near Hospital District",
      description:
        "Comfortable shared living space with other patients. Great for building a supportive community during treatment.",
      price: "$25-35",
      features: ["Shared Kitchen", "Shared Bathroom", "Community Living"],
      image: Img
    }
  ];

  const hotels = [
    {
      name: "Hotel Folen",
      type: "Hotel",
      location: "India",
      description:
        "Blocco Serato offers accommodations in Milan, 1.5 miles from Leonardo Station and 1.8 miles from GAM Milano.",
      price: "From $55",
      features: ["Daily Housekeeping", "24/7 Reception", "Room Service"],
      image: Img
    },
    {
      name: "Hotel Comfort Plus",
      type: "Hotel",
      location: "India",
      description:
        "Modern hotel accommodation with full amenities, located conveniently near major medical facilities.",
      price: "From $55",
      features: ["WiFi", "Breakfast Included", "Laundry Service"],
      image: Img
    },
    {
      name: "Hotel Grand Stay",
      type: "Hotel",
      location: "India",
      description:
        "Premium hotel experience with excellent service and comfortable rooms for medical tourists.",
      price: "From $55",
      features: ["Restaurant", "Fitness Center", "Concierge"],
      image: Img
    }
  ];

  const AccommodationCard = ({ accommodation }) => (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image with Type Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          {accommodation.type === "Guest House" ? (
            <Home className="w-3 h-3 text-blue-600" />
          ) : (
            <Building2 className="w-3 h-3 text-blue-600" />
          )}
          <span className="text-xs font-medium text-gray-700">
            {accommodation.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {accommodation.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-600 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          <span>{accommodation.location}</span>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
          {accommodation.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-blue-600">
            {accommodation.price}
          </span>
          <span className="text-xs text-gray-500">per night</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Affordable, World-Class Medical Care
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We assist our patients with accommodations near hospitals, travel
            arrangements, and other logistics to ensure patients have a
            comfortable and stress-free experience.
          </p>
        </div>

        {/* Guest Houses Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Home className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Guest Houses
            </h3>
            <span className="text-sm text-gray-500 ml-2">($25 - $35 per night)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guestHouses.map((accommodation, index) => (
              <AccommodationCard key={index} accommodation={accommodation} />
            ))}
          </div>
        </div>

        {/* Hotels Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Hotels
            </h3>
            <span className="text-sm text-gray-500 ml-2">(From $55 per night)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((accommodation, index) => (
              <AccommodationCard key={index} accommodation={accommodation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
