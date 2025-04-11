import React, { useState } from 'react';

export default function BrandSignIn() {
  const [formData, setFormData] = useState({
    businessName: '',
    legalEntityName: '',
    businessType: '', // Dropdown field
    category: '', // Dropdown field
    email: '',
    phoneNo: '',
    address: '',
    websiteOrSocialMedia: ''
  });

  const [errors, setErrors] = useState({});

  // Dropdown options for business type
  const businessTypes = [
    "Sole Proprietorship",
    "Partnership",
    "Limited Liability Company (LLC)",
    "Corporation",
    "Non-Profit Organization",
    "Other"
  ];

  // Dropdown options for category/niche
  const categories = [
    "Fashion & Apparel",
    "Beauty & Cosmetics",
    "Food & Beverage",
    "Technology",
    "Health & Fitness",
    "Travel & Hospitality",
    "Entertainment",
    "Education",
    "Finance",
    "Retail",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.legalEntityName) newErrors.legalEntityName = "Legal entity name is required";
    if (!formData.businessType) newErrors.businessType = "Please select a business type";
    if (!formData.category) newErrors.category = "Please select a category/niche";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNo)) newErrors.phoneNo = "Phone number must be 10 digits";
    if (!formData.address) newErrors.address = "Registered business address is required";
    if (!formData.websiteOrSocialMedia) newErrors.websiteOrSocialMedia = "Website or social media link is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);
    alert("Sign-in successful! Welcome to our brand network.");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute z-0 w-40 h-40 top-0 right-20 blue__gradient"></div>
      <div className="absolute z-0 w-80 h-80 bottom-40 right-20 pink__gradient"></div>
      <div className="absolute z-0 w-40 h-40 bottom-20 left-20 white__gradient"></div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-black-gradient rounded-2xl shadow-xl p-8 box-shadow">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">
            Brand Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your business name"
              />
              {errors.businessName && <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>}
            </div>

            {/* Legal Entity Name */}
            <div>
              <label htmlFor="legalEntityName" className="block text-sm font-medium text-gray-300 mb-1">
                Legal Entity Name
              </label>
              <input
                type="text"
                id="legalEntityName"
                name="legalEntityName"
                value={formData.legalEntityName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your legal entity name"
              />
              {errors.legalEntityName && <p className="mt-1 text-sm text-red-500">{errors.legalEntityName}</p>}
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>}
            </div>

            {/* Category/Niche */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                Category/Niche
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select your category/niche</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* Official Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="example@business.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="10-digit phone number"
                maxLength="10"
              />
              {errors.phoneNo && <p className="mt-1 text-sm text-red-500">{errors.phoneNo}</p>}
            </div>

            {/* Registered Business Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                Registered Business Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your registered business address"
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>

            {/* Website or Social Media Links */}
            <div>
              <label htmlFor="websiteOrSocialMedia" className="block text-sm font-medium text-gray-300 mb-1">
                Website or Social Media Links
              </label>
              <input
                type="url"
                id="websiteOrSocialMedia"
                name="websiteOrSocialMedia"
                value={formData.websiteOrSocialMedia}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="https://yourbrand.com or https://instagram.com/yourbrand"
              />
              {errors.websiteOrSocialMedia && <p className="mt-1 text-sm text-red-500">{errors.websiteOrSocialMedia}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-gradient text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Sign In as Brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}