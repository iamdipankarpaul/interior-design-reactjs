// import { useState } from "react";
import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection";
import ContactSection from "../components/ContactSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
// import EntranceAnimation from "../components/entrance-animation/EntranceAnimation";

export const HomePage = () => {
  // const [LoadingAnimation, setLoadingAnimation] = useState(true);

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
