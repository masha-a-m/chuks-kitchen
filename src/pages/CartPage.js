import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const formatPrice = (price) => {
    return parseInt(price.toString().replace(',', ''));
  };

  const calculateItemPrice = (item) => {
    let total = formatPrice(item.price);
    
    if (item.protein === 'fish') total += 500;
    if (item.protein === 'beef') total += 700;
    if (item.sides?.plantain) total += 700;
    if (item.sides?.coleslaw) total += 500;
    if (item.sides?.pepperSauce) total += 300;

    return total * item.quantity;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side - Logo and desktop navigation */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Logo - Cursive */}
            <h1 className="font-['cursive'] text-xl md:text-2xl text-orange-500">
              Chuks Kitchen
            </h1>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-48">
              <Link to="/mainpage" className="text-gray-700 hover:text-orange-500 ml-16">Home</Link>
              <Link to="/explore" className="text-gray-700 hover:text-orange-500">Explore</Link>
              <Link to="/cart" className="text-orange-500 font-medium">My Orders</Link>
              <Link to="/account" className="text-gray-700 hover:text-orange-500">Account</Link>
            </div>
          </div>

          {/* Right side - Login button and Hamburger menu */}
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <button className="hidden md:flex bg-orange-500 text-white px-10 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Login
              </button>
            </Link>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1.5 p-2"
            >
              <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={closeMenu}>
            <div 
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-['cursive'] text-xl text-orange-500">Menu</h2>
                <button onClick={closeMenu} className="text-gray-500 text-2xl">&times;</button>
              </div>
              
              {/* Menu Links */}
              <div className="p-4">
                <Link 
                  to="/mainpage" 
                  className="block py-3 text-gray-700 hover:text-orange-500 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/explore" 
                  className="block py-3 text-gray-700 hover:text-orange-500 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Explore
                </Link>
                <Link 
                  to="/cart" 
                  className="block py-3 text-orange-500 font-medium border-b border-gray-100"
                  onClick={closeMenu}
                >
                  My Orders
                </Link>
                <Link 
                  to="/account" 
                  className="block py-3 text-gray-700 hover:text-orange-500 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Account
                </Link>
                
                {/* Mobile Login Button */}
                <div className="mt-6">
                  <Link to="/signin" onClick={closeMenu}>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Section with Grey Background */}
      <div className="bg-gray-100 min-h-[calc(100vh-200px)] py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* White Background Container */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            {/* Your Cart Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link to="/mainpage">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Browse Menu
                  </button>
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Image */}
                        <div className="w-20 h-20 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          
                          {/* Additions */}
                          {item.additions.length > 0 && (
                            <div className="text-sm text-gray-600 mt-1">
                              {item.additions.join(' • ')}
                            </div>
                          )}
                          
                          {/* Special Instructions */}
                          {item.instructions && (
                            <div className="text-xs text-gray-500 mt-1 italic">
                              Note: {item.instructions}
                            </div>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <span className="text-gray-600 text-lg">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <span className="text-gray-600 text-lg">+</span>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-orange-500 font-bold w-24 text-right">
                          ₦ {calculateItemPrice(item).toLocaleString()}
                        </div>

                        {/* Remove Button */}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors flex-shrink-0"
                        >
                          <span className="text-white text-lg">✕</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Items Link */}
                <div className="border-t border-gray-200 pt-4">
                  <Link to="/mainpage" className="text-blue-600 hover:underline font-medium">
                    + Add more items from Chuks Kitchen
                  </Link>
                </div>

                {/* Cart Total */}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-orange-500">
                      ₦ {getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors mt-6">
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-['cursive'] text-xl text-orange-500 mb-3">Chuks Kitchen</h3>
              <p className="text-sm leading-relaxed">
                Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/mainpage" className="text-sm hover:text-orange-500">Home</Link></li>
                <li><Link to="/explore" className="text-sm hover:text-orange-500">Explore</Link></li>
                <li><Link to="/cart" className="text-sm hover:text-orange-500">My order</Link></li>
                <li><Link to="/account" className="text-sm hover:text-orange-500">Account</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-orange-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-sm">+234 801 234 5678</li>
                <li className="text-sm">hello@chukskitchen.com</li>
                <li className="text-sm">123 Taste Blvd, Lagos Nigeria</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm hover:text-orange-500">Facebook</Link></li>
                <li><Link to="#" className="text-sm hover:text-orange-500">Twitter</Link></li>
                <li><Link to="#" className="text-sm hover:text-orange-500">LinkedIn</Link></li>
                <li><Link to="#" className="text-sm hover:text-orange-500">Instagram</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <div className="text-sm">
              <span>© 2020 Lift Media. All Rights Reserved.</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <span className="text-white text-lg">↑</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CartPage;