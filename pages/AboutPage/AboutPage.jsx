import React from "react";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import AboutUsHeroSection from "./AboutUsHeroSection/AboutUsHeroSection";
import AboutMissionSection from "./AboutMissionSection/AboutMissionSection";
import AboutWhoWeAre from "./AboutWhoWeAre/AboutWhoWeAre";

const AboutPage = () => {
  return (
    <>
      <HeaderBanner title={"About Us"} />
      <AboutUsHeroSection />
      <AboutMissionSection />
      <AboutWhoWeAre />
    </>
  );
};

export default AboutPage;
