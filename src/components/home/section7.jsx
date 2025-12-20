import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Section7() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "About Healing Ways",
      answer:
        "Healing Ways is a comprehensive medical tourism platform that connects patients with top-quality healthcare facilities both locally and internationally. We provide end-to-end support for your medical journey."
    },
    {
      question: "What makes Healing Ways different from other platforms?",
      answer:
        "We offer personalized care coordination, transparent pricing, verified hospital partnerships, and comprehensive support services including visa processing, travel arrangements, and post-treatment follow-up."
    },
    {
      question: "How do you ensure quality and safety?",
      answer:
        "Our platform stands out through accredited hospital partnerships, experienced medical professionals, and a strong focus on patient safety and care transparency."
    },
    {
      question: "Do you provide support after treatment?",
      answer:
        "Yes, we provide post-treatment follow-up and continuous support to ensure a smooth recovery and positive medical experience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F3F0] py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left - Header */}
          <div>
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">
              Support
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently asked questions
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              We won’t leave you wondering — all your questions are answered
              below.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
              Get in touch
            </button>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
