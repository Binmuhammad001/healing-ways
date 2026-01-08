import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const navigate = useNavigate();

  const faqs = [
    "What makes healing different from other platforms?",
    "What makes healing different from other platforms?",
    "What makes healing different from other platforms?",
    "What makes healing different from other platforms?",
  ];

  return (
    <section className="bg-[#F8F6F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase mb-3">
              Support
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              We won’t leave you wondering; all your questions
              <br />
              – answered below.
            </p>

           <button
  onClick={() => navigate("/contact")}
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
>
  Get in touch
</button>

          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-gray-900 font-semibold">
                About Healing ways
              </h3>
            </div>

            {faqs.map((question, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-900 font-medium">
                    {question}
                  </p>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-sm max-w-xl">
                    Healing Ways focuses on connecting individuals with trusted
                    medical services and wellness guidance tailored to their
                    needs.
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
