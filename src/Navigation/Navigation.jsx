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
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
