import React from 'react';
import { useNavigate } from 'react-router-dom';
import onboardingweb from '../assets/onboarding-web.jpg'; 
import onboardingmobile from '../assets/onboarding-mobile.jpg'; 


function Onboarding() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleStartOrderClick = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile View - visible only on small screens */}
      <div className="block md:hidden">
        {/* Mobile Hero Image */}
        <div className="h-56 bg-cover bg-center relative" style={{
          backgroundImage: `url(${onboardingmobile})`,
        }}>
          {/* Sign In Button - positioned absolute on image */}
          <div className="absolute top-64 right-4">
            <button onClick={handleSignInClick}
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-2 rounded-lg font-medium text-sm">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="px-4 py-6 mt-20">
          {/* Logo - Cursive */}
          <h1 className="font-['cursive'] text-3xl text-orange-500 text-center mb-4">
            Chuks Kitchen
          </h1>

          {/* Headline */}
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Your Authentic Taste of Nigeria
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-md mb-6 leading-relaxed">
            Experience homemade flavors delivered fresh to your desk or home. 
            We bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* Mobile Features - Stacked */}
          <div className="space-y-4 mb-6">
            {/* Feature 1 */}
            <div className="flex items-center bg-gray-50 px-4 py-4 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-500 text-lg">🍴</span>
              </div>
              <span className="text-gray-800 font-medium">Freshly Prepared</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center bg-gray-50 px-4 py-4 rouned-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-500 text-lg">🤝</span>
              </div>
              <span className="text-gray-800 font-medium">Support Local Business</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center bg-gray-50 px-4 py-4 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-500 text-lg">🚌</span>
              </div>
              <span className="text-gray-800 font-medium">Fast & Reliable Delivery</span>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="space-y-3 mb-8 mt-14">
            <button onClick={handleStartOrderClick} className="w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
              Start Your Order
            </button>
            <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More About Us
            </button>
          </div>

          {/* Mobile Footer Note */}
          <div className="text-xs text-gray-500 text-center border-t pt-4">
            <span className="mr-4">© 2024 Chuck Kitchen</span>
            <button className="text-blue-600 mr-3">Privacy Policy</button>
            <button className="text-blue-600">Terms of Services</button>
          </div>
        </div>
      </div>

      {/* Desktop View - visible on medium screens and up */}
      <div className="hidden md:block">
        {/* Main Section - 70% of page */}
        <div className="min-h-[70vh] flex">
          {/* Left Side - Image (70% width) */}
          <div className="w-[45%] bg-cover bg-center" style={{
             backgroundImage: `url(${onboardingweb})`,
          }}>
            {/* This space is intentionally empty - image only */}
          </div>

          {/* Right Side - White Background with Left Padding */}
          <div className="w-[55%] bg-white pl-20 pr-14 py-6 flex flex-col">
            {/* Header with Sign In */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-['cursive'] text-2xl text-orange-500">
                Chuks Kitchen
              </h1>
              <button onClick={handleSignInClick} className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Sign In
              </button>
            </div>

            {/* Main Content with some top spacing */}
            <div className="flex-1">
              {/* Bold Headline */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Your Authentic Taste of Nigeria
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Experience homemade flavors delivered fresh to your desk or home.
                We bring <br></br>the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              {/* Features Grid - Two in first row, one below */}
              <div className="mb-10">
                {/* First Row - Two Features */}
                <div className="flex gap-2 mb-8">
                  {/* Feature 1 */}
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-orange-500 text-sm">🍴</span>
                      </div>
                      <span className="text-gray-800 text-sm font-medium">Freshly Prepared</span>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-orange-500 text-sm">🤝</span>
                      </div>
                      <span className="text-gray-800 text-sm font-medium">Support Local Business</span>
                    </div>
                  </div>
                </div>

                {/* Second Row - One Feature */}
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-orange-500 text-sm">🚌</span>
                    </div>
                    <span className="text-gray-800 text-sm font-medium">Fast & Reliable Delivery</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-6">
                <button onClick={handleStartOrderClick} className="w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Start Your Order
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More About Us
                </button>
              </div>

              {/* Copyright and Links */}
              <div className="mt-40  text-sm text-center">
                <span className="text-gray-500 mr-4">© 2024 Chuck Kitchen</span>
                <button className="text-blue-600 mr-3 hover:underline">Privacy Policy</button>
                <button className="text-blue-600 hover:underline">Terms of Services</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section - Second section */}
        <footer className="bg-gray-900 text-white py-16 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Footer Grid - 4 columns */}
            <div className="grid grid-cols-4 gap-8 mb-8">
              {/* Column 1 - About */}
              <div>
                <h3 className="font-['cursive'] text-xl text-orange-500 mb-3">Chuks Kitchen</h3>
                <p className="text-sm leading-relaxed">
                  Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                </p>
              </div>

              {/* Column 2 - Quick Links */}
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><button className="text-sm hover:text-orange-500">Home</button></li>
                  <li><button className="text-sm hover:text-orange-500">Explore</button></li>
                  <li><button className="text-sm hover:text-orange-500">My order</button></li>
                  <li><button className="text-sm hover:text-orange-500">Account</button></li>
                  <li><button className="text-sm hover:text-orange-500">Contact</button></li>
                </ul>
              </div>

              {/* Column 3 - Contact Us */}
              <div>
                <h4 className="font-semibold mb-3">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="text-sm">+234 801 234 5678</li>
                  <li className="text-sm">hello@chukskitchen.com</li>
                  <li className="text-sm">123 Taste Blvd, Lagos Nigeria</li>
                </ul>
              </div>

              {/* Column 4 - Social */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <ul className="space-y-2">
                  <li><button className="text-sm hover:text-orange-500">Facebook</button></li>
                  <li><button className="text-sm hover:text-orange-500">Twitter</button></li>
                  <li><button className="text-sm hover:text-orange-500">LinkedIn</button></li>
                  <li><button className="text-sm hover:text-orange-500">Instagram</button></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer with Copyright and Arrow Up */}
            <div className="flex justify-between items-center pt-6">
              <div className="text-sm">
                <span>© 2020 Lift Media. All Rights Reserved.</span>
              </div>
              <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white text-lg">↑</span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Onboarding;