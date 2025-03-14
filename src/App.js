import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
// import Products from "./page/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
  );
}

export default App;
