import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OtherServicesCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const services = [
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop",
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop",
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop",
    },
    {
      title: "Medical Report Translation",
      description:
        "We are committed to making your medical tourism journey a success, from initial consultation.",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop",
    },
  ];

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScrollability, 300);
  };

  return (
    <section className="bg-[#F7F3F0] py-8 sm:py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Other services
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up.
            </p>
          </div>

          {/* Navigation Arrows - Visible on all screen sizes */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 sm:p-3 rounded-full transition flex-shrink-0 ${
                canScrollLeft
                  ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 sm:p-3 rounded-full transition flex-shrink-0 ${
                canScrollRight
                  ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[90%] sm:w-[280px] md:w-[320px] lg:w-[360px]"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-2 sm:mb-3 h-40 sm:h-56 md:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
