import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import onboardingweb from '../assets/onboarding-web.jpg'; 

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleMainPageClick = (e) => {
    e.preventDefault();
    navigate('/mainpage');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Version */}
      <div className="block md:hidden px-4 py-6">
        {/* Logo - Cursive Orange */}
        <h1 className="font-['cursive'] text-3xl text-orange-500 text-center mb-2">
          Chuks Kitchen
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange-500">
              <span className="text-gray-400 mr-2">📧</span>
              <input 
                type="email" 
                className="w-full outline-none text-sm"
                placeholder="name@gmail.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange-500">
              <span className="text-gray-400 mr-2">🔒</span>
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full outline-none text-sm"
                placeholder="QWE123#"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <p className="text-sm text-blue-600 text-right">Forgot Password?</p>

          {/* Continue Button */}
          <button onClick={handleMainPageClick} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Continue
          </button>

          {/* Or continue with */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
            <span className="mr-2">G</span>
            Continue with Google
          </button>

          {/* Facebook Button */}
          <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
            <span className="mr-2">f</span>
            Continue with Facebook
          </button>

          {/* Already have account */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">Create an account</Link>
          </p>
        </form>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block min-h-screen">
        {/* Main Section - Two Columns */}
        <div className="flex min-h-[calc(100vh-300px)]">
          {/* Left Side - Image with Orange Overlay */}
          <div className="w-1/2 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${onboardingweb})`,
              }}
            >
              {/* Orange Overlay */}
              <div className="absolute inset-0 bg-orange-700 bg-opacity-70"></div>
            </div>
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h1 className="text-4xl font-bold mb-4">Chuks Kitchen</h1>
                <p className="text-md leading-relaxed">
                  Your journey to delicious, authentic<br></br> Nigerian meals start here. 
                  Sign up<br></br> or log in to order your favorites<br></br> today.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Gray Background with Form */}
          <div className="w-1/2 bg-gray-100 px-12 py-8 overflow-y-auto">
            {/* Logo - Cursive */}
            <h1 className="font-['cursive'] text-2xl text-center text-orange-500 mb-2">
              Chuks Kitchen
            </h1>

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>

            {/* Form */}
            <form className="space-y-5 max-w-md mx-auto">
              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <div className="flex items-center border border-gray-300 bg-white rounded-lg px-3 py-2 focus-within:border-orange-500">
                  <span className="text-gray-400 mr-2">📧</span>
                  <input 
                    type="email" 
                    className="w-full outline-none text-sm bg-transparent"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                <div className="flex items-center border border-gray-300 bg-white rounded-lg px-3 py-2 focus-within:border-orange-500">
                  <span className="text-gray-400 mr-2">🔒</span>
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="w-full outline-none text-sm bg-transparent"
                    placeholder="QWE123#"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <p className="text-sm text-blue-600 text-right">Forgot Password?</p>

              {/* Continue Button */}
              <button onClick={handleMainPageClick} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Continue
              </button>

              {/* Or continue with */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Button */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <span className="mr-2 text-xl">G</span>
                Continue with Google
              </button>

              {/* Facebook Button */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <span className="mr-2 text-xl">f</span>
                Continue with Facebook
              </button>

              {/* Already have account */}
              <p className="text-center text-gray-600 text-sm mt-4 pb-20">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:underline font-medium mb-20">Create an account</Link>
              </p>
            </form>
          </div>
        </div>

        {/* Footer Section */}
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

export default SignIn;