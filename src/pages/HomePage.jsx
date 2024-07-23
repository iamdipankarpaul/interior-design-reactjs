// import { useState } from "react";
import { useEffect } from "react";
import AboutSection from "../components/home-page/AboutSection";
import AchievementSection from "../components/home-page/AchievementSection";
import ContactSection from "../components/home-page/ContactSection";
import FeaturesSection from "../components/home-page/FeaturesSection";
import HeroSection from "../components/home-page/HeroSection";
// import EntranceAnimation from "../components/entrance-animation/EntranceAnimation";

export const HomePage = () => {
  // const [LoadingAnimation, setLoadingAnimation] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* {LoadingAnimation && (
        <EntranceAnimation setLoadingAnimation={setLoadingAnimation} />
      )} */}
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AchievementSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
