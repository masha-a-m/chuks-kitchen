import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Onboarding from './pages/Onboarding';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;