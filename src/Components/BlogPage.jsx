import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularArticles from "./PopularArticles";
import AllArticles from "./AllArticles";
import AppBrainIntelligence from "./AppBrainIntelligence";
import Footer from "./Footer";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularArticles />
      <AllArticles />
      <AppBrainIntelligence />
      <Footer />
    </div>
  );
};

export default BlogPage;
