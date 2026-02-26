import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function FoodDetailOverlay({ food, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedProtein, setSelectedProtein] = useState('chicken');
  const [selectedSides, setSelectedSides] = useState({
    plantain: false,
    coleslaw: false,
    pepperSauce: false
  });
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen || !food) return null;

  const handleSideToggle = (side) => {
    setSelectedSides(prev => ({
      ...prev,
      [side]: !prev[side]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* Overlay content - full screen on mobile, large on desktop */}
      <div className="bg-white w-full h-full md:w-[90%] md:h-[90%] overflow-y-auto animate-fade-in md:rounded-2xl">
        {/* Flex column on mobile, flex row on desktop */}
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left side - Image (full width on mobile, half on desktop) */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
          </div>

          {/* Right side - Content (full width on mobile, half on desktop) */}
          <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto relative">
            {/* Mobile close button - only visible on mobile */}
            <div className="flex justify-end md:hidden mb-2">
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white text-lg">✕</span>
              </button>
            </div>

            {/* Desktop close button - only visible on desktop */}
            <div className="hidden md:block absolute top-4 right-4">
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white text-lg">✕</span>
              </button>
            </div>

            {/* Title and Price */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-8 md:mt-0">{food.name}</h2>
            <p className="text-xl md:text-2xl text-orange-500 font-bold mb-3">₦ {food.price}</p>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
              {food.description}
            </p>

            {/* Info Icons */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <div className="flex items-center">
                <span className="text-orange-500 mr-1">⏱️</span>
                <span className="text-gray-700">Mildly spicy</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-1">🌱</span>
                <span className="text-gray-700">Vegetarian option available</span>
              </div>
              <button className="text-blue-600 hover:underline">View Allergies</button>
            </div>

            {/* Choose your Protein */}
            <h3 className="font-bold text-gray-900 mb-3">Choose your Protein</h3>
            
            {/* Protein Options */}
            <div className="space-y-3 mb-6">
              {/* Fried Chicken */}
              <div 
                onClick={() => setSelectedProtein('chicken')}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedProtein === 'chicken' ? 'border-orange-500 border-2' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 ${
                    selectedProtein === 'chicken' ? 'border-4 border-orange-500' : 'border-2 border-gray-300'
                  }`}></div>
                  <span className="text-gray-800">Fried Chicken</span>
                </div>
                <span className="text-sm text-gray-500">(Default)</span>
              </div>

              {/* Grilled Fish */}
              <div 
                onClick={() => setSelectedProtein('fish')}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedProtein === 'fish' ? 'border-orange-500 border-2' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 ${
                    selectedProtein === 'fish' ? 'border-4 border-orange-500' : 'border-2 border-gray-300'
                  }`}></div>
                  <span className="text-gray-800">Grilled Fish</span>
                </div>
                <span className="text-orange-500 font-medium">+ ₦ 500</span>
              </div>

              {/* Beef */}
              <div 
                onClick={() => setSelectedProtein('beef')}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedProtein === 'beef' ? 'border-orange-500 border-2' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 ${
                    selectedProtein === 'beef' ? 'border-4 border-orange-500' : 'border-2 border-gray-300'
                  }`}></div>
                  <span className="text-gray-800">Beef</span>
                </div>
                <span className="text-orange-500 font-medium">+ ₦ 700</span>
              </div>
            </div>

            {/* Extra Sides (Optional) */}
            <h3 className="font-bold text-gray-900 mb-3">Extra Sides (Optional)</h3>
            
            {/* Sides Options */}
            <div className="space-y-3 mb-6">
              {/* Fried Plantain */}
              <div 
                onClick={() => handleSideToggle('plantain')}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300"
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 border-2 flex items-center justify-center ${
                    selectedSides.plantain ? 'bg-orange-500 border-orange-500' : 'border-gray-300 bg-white'
                  }`}>
                    {selectedSides.plantain && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-gray-800">Fried Plantain</span>
                </div>
                <span className="text-orange-500 font-medium">+ ₦ 700</span>
              </div>

              {/* Coleslaw */}
              <div 
                onClick={() => handleSideToggle('coleslaw')}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300"
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 border-2 flex items-center justify-center ${
                    selectedSides.coleslaw ? 'bg-orange-500 border-orange-500' : 'border-gray-300 bg-white'
                  }`}>
                    {selectedSides.coleslaw && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-gray-800">Coleslaw</span>
                </div>
                <span className="text-orange-500 font-medium">+ ₦ 500</span>
              </div>

              {/* Extra Pepper Sauce */}
              <div 
                onClick={() => handleSideToggle('pepperSauce')}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300"
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 border-2 flex items-center justify-center ${
                    selectedSides.pepperSauce ? 'bg-orange-500 border-orange-500' : 'border-gray-300 bg-white'
                  }`}>
                    {selectedSides.pepperSauce && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-gray-800">Extra Pepper Sauce</span>
                </div>
                <span className="text-orange-500 font-medium">+ ₦ 300</span>
              </div>
            </div>

            {/* Special Instructions */}
            <h3 className="font-bold text-gray-900 mb-2">Special Instructions</h3>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Add any special requests or dietary requirements..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 min-h-[100px] mb-6"
            />

            {/* Add to Cart Button */}
            <button onClick={() => {
                      addToCart(food, selectedProtein, selectedSides, specialInstructions);
                      onClose();
                    }} 
                    className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors mb-4">
              Add to Cart - ₦ {food.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailOverlay;