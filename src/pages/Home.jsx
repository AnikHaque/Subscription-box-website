import React from "react";
import Hero from "../components/Hero/Hero";
import Subscription from "../components/Subscription/Subscription";
import HomeBlog from "../components/Blogs/HomeBlogs";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Hero></Hero>
      <Subscription></Subscription>
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Home;
