import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
// import Products from "./page/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
  );
}

export default App;
