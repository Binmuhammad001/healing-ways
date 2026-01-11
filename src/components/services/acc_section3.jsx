import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img from "../../assets/rep_img2.jpg";

export default function OtherServicesCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setTimeout(checkScrollability, 100);
    };

    checkScrollability();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  // Mobile Grid Layout
  if (isMobile) {
    return (
      <section className="bg-[#F7F3F0] py-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Other services
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up.
            </p>
          </div>

          {/* Grid for Mobile */}
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-3 h-48 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm w-fit"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Carousel Layout
  return (
    <section className="bg-[#F7F3F0] py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div className="max-w-2xl mb-6 sm:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Other services
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition flex-shrink-0 ${
                canScrollLeft
                  ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition flex-shrink-0 ${
                canScrollRight
                  ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[280px] md:w-[320px] lg:w-[360px]"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-3 h-56 md:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base mb-3 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
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
