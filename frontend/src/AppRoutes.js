import React from 'react'
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Food/FoodPage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import PaymentPage from './pages/Payment/PaymentPage';
import ProfilePage from './pages/Profile/ProfilePage';

export default function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search/:searchTerm" element={<HomePage />} />
    <Route path="/tag/:tag" element={<HomePage />} />
    <Route path="/food/:id" element={<FoodPage />} />
    <Route path="/Cart" element={<CartPage />} />
    <Route path="/Login" element={<LoginPage />} />
    <Route path="/Register" element={<RegisterPage />} />
    <Route
        path="/checkout"
        element={
          <AuthRoute>
            <CheckoutPage />
          </AuthRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />
      



    </Routes>
  );
}
