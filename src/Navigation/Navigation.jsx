import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
