import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, protein, sides, instructions) => {
    const cartItem = {
      id: `${item.id}-${Date.now()}`,
      itemId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      protein: protein,
      sides: sides,
      instructions: instructions,
      quantity: 1,
      additions: []
    };

    // Add side items to additions array
    if (sides.plantain) cartItem.additions.push('Plantain (+₦700)');
    if (sides.coleslaw) cartItem.additions.push('Coleslaw (+₦500)');
    if (sides.pepperSauce) cartItem.additions.push('Pepper Sauce (+₦300)');

    // Add protein if not default and has extra cost
    if (protein === 'fish') cartItem.additions.push('Grilled Fish (+₦500)');
    if (protein === 'beef') cartItem.additions.push('Beef (+₦700)');

    setCartItems(prev => [...prev, cartItem]);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseInt(item.price.replace(',', ''));
      let additionsTotal = 0;
      
      if (item.protein === 'fish') additionsTotal += 500;
      if (item.protein === 'beef') additionsTotal += 700;
      if (item.sides?.plantain) additionsTotal += 700;
      if (item.sides?.coleslaw) additionsTotal += 500;
      if (item.sides?.pepperSauce) additionsTotal += 300;

      return total + ((itemPrice + additionsTotal) * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}