import React, { useState, useRef, useEffect } from "react";
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
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  return (
    <section className="bg-[#F7F3F0] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">

          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Other services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We are committed to making your medical tourism journey a success,
              from initial consultation to post-treatment follow-up.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 justify-start md:justify-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition ${
                canScrollLeft
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition ${
                canScrollRight
                  ? "bg-gray-200 hover:bg-gray-300"
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
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 snap-center
                w-[80vw] max-w-[280px]
                sm:w-[260px]
                md:w-[300px]
                lg:w-[340px]
              "
            >
              <div className="overflow-hidden rounded-xl mb-3 h-44 sm:h-52 md:h-60 lg:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                {service.description}
              </p>

              <a className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
