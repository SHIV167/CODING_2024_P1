import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ?----------Components-------------------

import NavBar from "./Components/NavBar.jsx";
import Product from "./Components/Product.jsx";
import Cart from "./Components/Cart.jsx";
import Home from "./Home.jsx";

// ?--------------------------------------

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Home />
        <Routes>
          <Route path="" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
