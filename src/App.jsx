import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

