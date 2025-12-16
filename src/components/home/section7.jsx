import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function section7() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "About Healing ways",
      answer: "Healing Ways is a comprehensive medical tourism platform that connects patients with top-quality healthcare facilities both locally and internationally. We provide end-to-end support for your medical journey."
    },
    {
      question: "What makes healing different from other platforms?",
      answer: "We offer personalized care coordination, transparent pricing, verified hospital partnerships, and comprehensive support services including visa processing, travel arrangements, and post-treatment follow-up."
    },
    {
      question: "What makes healing different from other platforms?",
      answer: "Our platform stands out through our dedicated patient advocates, extensive network of accredited facilities, and commitment to affordable, high-quality medical care with full transparency."
    },
    {
      question: "What makes healing different from other platforms?",
      answer: "We prioritize patient safety, provide multilingual support, offer competitive pricing, and ensure seamless coordination between patients and healthcare providers throughout the entire medical journey."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F3F0] py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-5 items-start">
          {/* Left side - Header */}
          <div className='pl-10'>
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">SUPPORT</p>
            <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently asked questions
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We won't leave you wondering; all your questions<br/> - answered below.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm">
              Get in touch
            </button>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors bg-white"
                >
                  <span className="font-semibold text-gray-900 text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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