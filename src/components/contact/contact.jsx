import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from '../../assets/contact_img.jpg';

export default function ContactSalesForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comments: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully 🎉");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          comments: '',
          country: '',
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Form */}
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Contact Sales</h2>
            <p className="text-gray-600 mb-8">
              Ready to build the future of health tourism? Reach out to our sales<br />
              team and we'll be in touch.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* First name & Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">First name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Last name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 text-sm" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 text-sm" />
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border rounded-lg text-sm">
                    <option>🇺🇸 +1</option>
                    <option>🇬🇧 +44</option>
                    <option>🇳🇬 +234</option>
                  </select>

                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 border rounded-lg text-sm" />
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Comments</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange}
                  placeholder="Tell us your message..." rows={4}
                  className="w-full px-4 py-3 border rounded-lg resize-none text-sm" />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Country of residence</label>
                <div className="relative">
                  <select name="country" value={formData.country} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-sm appearance-none">
                    <option value="">Select one</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ng">Nigeria</option>
                    <option value="ca">Canada</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2">
                Submit <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Image */}
          <div>
            <img src={Image} alt="Contact" className="w-full rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
