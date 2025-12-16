import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img from "../../assets/rep_img2.jpg";

export default function OtherServicesCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const services = [
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: Img,
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: Img,
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: Img,
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: Img,
    },
  ];

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="bg-[#F7F3F0] py-16 md:py-10 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between mb-8">
          <div className="max-w-2xl mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Other services
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up. Let us help
              you achieve your goals.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all ${
                canScrollLeft
                  ? "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all ${
                canScrollRight
                  ? "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[80%] xs:w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4 h-48 sm:h-56 md:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group"
              >
                Learn more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
