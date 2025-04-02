import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GetQuote from "./page/GetQuote";
import AboutUs from "./page/AboutUs";
import Movers from "./page/Movers";
// import Products from "./page/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/movers" element={<Movers />} />
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
  );
}

export default App;
