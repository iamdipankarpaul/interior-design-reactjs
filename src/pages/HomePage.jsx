import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection";
import ContactSection from "../components/ContactSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import OwlComponent from "../components/OwlComponent";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <AchievementSection />
      <OwlComponent />
      <ContactSection />
    </>
  );
};

export default HomePage;
