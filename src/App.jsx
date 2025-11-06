import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CarListing from "./pages/CarListing.jsx";
import OrderPage from "./pages/OrderPage.jsx"; // Make sure this file exists!

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}
