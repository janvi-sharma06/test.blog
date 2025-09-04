import React from "react";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import PopularArticles from "./Components/PopularArticles";
import AllArticles from "./Components/AllArticles";
import AppBrainIntelligence from "./Components/AppBrainIntelligence";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularArticles />
      <AllArticles />
      <AppBrainIntelligence />
      <Footer />
    </>
  );
}

export default App;

