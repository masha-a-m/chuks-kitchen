import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-food.png'; 
import jollofImage from '../assets/jollofDelights.jpg'; 
import pepperSoupImage from '../assets/pepper-soup.jpg';
import swallow from '../assets/swallow.png';
import grills from '../assets/grills.jpg';
import sweets from '../assets/sweets.jpg';
import egusi from '../assets/egusi.jpg'; 
import mainPageImg from '../assets/mainpage-heroimg.jpg';
import FoodDetailOverlay from '../components/FoodDetailOverlay';
import { useCart } from '../context/CartContext';

function MainPage() {
  // const [cartItems] = useState({});

  const isItemInCart = (itemId) => {
  return cartItems.some(item => item.itemId === itemId);
};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const {cartItems, addToCart } = useCart();


  // const handleAddToCart = (itemId) => {
  //   setCartItems(prev => ({
  //     ...prev,
  //     [itemId]: !prev[itemId]
  //   }));
  // };
  
const handleQuickAdd = (item) => {
  addToCart(
    item, 
    'chicken', 
    { plantain: false, coleslaw: false, pepperSauce: false }, 
    ''
  );
};

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedFood(null);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const categories = [
    { id: 1, name: 'Jollof Delights', image: jollofImage },
    { id: 2, name: 'Swallow & Soups', image: swallow },
    { id: 3, name: 'Grills & BBQs', image: grills },
    { id: 4, name: 'Sweet Treats', image: sweets },
    { id: 5, name: 'Jollof Delights', image: jollofImage },
    { id: 6, name: 'Jollof Delights', image: jollofImage },
  ];

  const specials = [
    { 
      id: 1, 
      name: 'Spicy Tilapia Pepper Soup', 
      description: 'A spicy and comforting soup with tender tilapia fish, cooked with traditional spices and herbs. Served hot with assorted vegetables.',
      price: '3,500', 
      image: grills 
    },
    { 
      id: 2, 
      name: 'Egusi Soup with Pounded Yam', 
      description: 'Rich and nutritious melon seed soup prepared with assorted meat, fish, and leafy vegetables. Served with smooth pounded yam.',
      price: '4,200', 
      image: egusi 
    },
    { 
      id: 3, 
      name: 'Jollof Rice with Chicken', 
      description: 'Party-style jollof rice cooked in rich tomato sauce with aromatic spices. Served with grilled chicken and fried plantain.',
      price: '3,800', 
      image: jollofImage 
    },
    { 
      id: 4, 
      name: 'Suya Spiced Beef', 
      description: 'Tender beef skewers marinated in authentic suya spice mix, grilled to perfection. Served with fresh onions and tomatoes.',
      price: '2,500', 
      image: grills 
    },
    { 
      id: 5, 
      name: 'Fried Rice with Goat Meat', 
      description: 'Savory fried rice with mixed vegetables and tender goat meat. Seasoned with traditional spices and herbs.',
      price: '4,000', 
      image: pepperSoupImage 
    },
    { 
      id: 6, 
      name: 'Egusi soup & Pounded Yam', 
      description: 'Rich and savory egusi soup with savory meat, paired with pounded yam.',
      price: '4,500', 
      image: egusi 
    },
  ];
  
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
              <Link to="/mainpage" className="text-orange-500 font-medium ml-16">Home</Link>
              <Link to="/explore" className="text-gray-700 hover:text-orange-500">Explore</Link>
              <Link to="/cart" className="text-gray-700 hover:text-orange-500">My Orders</Link>
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
                  className="block py-3 text-orange-500 font-medium border-b border-gray-100"
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
                  className="block py-3 text-gray-700 hover:text-orange-500 border-b border-gray-100"
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

      {/* Hero Section with Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainPageImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">The Heart of Nigerian</h1>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Home Cooking</h1>
            <p className="text-lg md:text-xl mb-6">Handcrafted with passion, delivered with care.</p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Discover what's new
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] translate-y-1/2">
          <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
            <span className="text-gray-400 ml-2">🔍</span>
            <input 
              type="text" 
              placeholder="What are you craving for today?"
              className="w-full px-3 py-2 outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Popular Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 6).map((category) => (
            <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
              <div className="p-3 text-center">
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/categories" className="text-blue-600 hover:underline font-medium">
            View All Categories →
          </Link>
        </div>
      </div>

      {/* Chef's Specials Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-36">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Chef's Specials</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleFoodClick(item)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">₦ {item.price}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickAdd(item);
                    }}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isItemInCart(item.id) 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {isItemInCart(item.id) ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Menu Banner */}
      <div className="relative h-[250px] md:h-[400px] mt-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Introducing Our New Menu Additions!</h2>
            <p className="text-sm md:text-base mb-4">
              Explore exciting new dishes, crafted with the freshest<br></br> ingredients and authentic Nigerian flavors. Limited time<br></br> offer!
            </p>
            <button className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base">
              Discover what's new
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-['cursive'] text-xl text-orange-500 mb-3">Chuks Kitchen</h3>
              <p className="text-sm leading-relaxed">
                Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
              </p>
            </div>
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
                <li><button className="text-sm hover:text-orange-500">Facebook</button></li>
                <li><button className="text-sm hover:text-orange-500">Twitter</button></li>
                <li><button className="text-sm hover:text-orange-500">LinkedIn</button></li>
                <li><button className="text-sm hover:text-orange-500">Instagram</button></li>
              </ul>
            </div>
          </div>

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

      {/* Food Detail Overlay */}
      <FoodDetailOverlay 
        food={selectedFood} 
        isOpen={isOverlayOpen} 
        onClose={handleCloseOverlay} 
      />
    </div>
  );
}

export default MainPage;