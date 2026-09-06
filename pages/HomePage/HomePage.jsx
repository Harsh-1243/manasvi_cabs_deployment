"use client";

import React from "react";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import CarsCards from "../CarsPage/CarsCards/CarsCards";
import HomeOurServices from "./HomeOurServices/HomeOurServices";
import HomeAboutoutManasviCabs from "./HomeAboutoutManasviCabs/HomeAboutoutManasviCabs";
import HomeWhyChooseUs from "./HomeWhyChooseUs/HomeWhyChooseUs";
import HomeOurTestimonial from "./HomeOurTestimonial/HomeOurTestimonial";
import HomeFAQs from "./HomeFAQs/HomeFAQs";

const HomePage = () => {
  return (
    <div>
      <HomeHeroSection />
      <CarsCards />
      <HomeOurServices />
      <HomeAboutoutManasviCabs />
      <HomeWhyChooseUs />
      <HomeOurTestimonial />
      <HomeFAQs />
    </div>
  );
};

export default HomePage;
