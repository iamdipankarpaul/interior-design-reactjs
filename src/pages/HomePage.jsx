import heroImg from "../assets/hero.jpg";
import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection";
import ContactSection from "../components/ContactSection";
import FeaturesSection from "../components/FeaturesSection";
export const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <section className={`min-h-screen pt-4`}>
        <h1 className="text-4xl md:text-5xl text-center font-bold md:font-extrabold mt-36 md:mt-16 mb-8 md:mb-14 tracking-wider">
          Transform Your Space <br />
          with Elegance and Style
        </h1>
        <div className="relative ">
          <div className="w-[95%] md:w-[80%] mx-auto overflow-hidden">
            <img
              src={heroImg}
              alt="hero image"
              className="h-full w-full hover:scale-105 duration-300"
            />
          </div>

          <div className="p-4 md:p-8 border-t-4 bg-white border-t-[#a6a182] w-fit absolute top-[75px] right-[50px] shadow-lg animate-bounce-slow max-sm:top-[200px] max-sm:right-[30px]">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">mi@manshainteriors.com</p>
          </div>

          <div className="p-4 md:p-8 border-t-4 bg-white border-t-[#a6a182] w-fit absolute top-[250px] left-[50px] max-sm:left-[30px] shadow-lg animate-bounce-slow">
            <p className="text-xl md:text-3xl font-bold text-[#A6A182]">104</p>
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
            <div className="my-4 md:my-8"></div>
            <p className="text-xl md:text-3xl font-bold text-[#A6A182]">98</p>
            <p className="text-sm sm:text-base">AWARDS RECEIVED</p>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <AboutSection />
      <AchievementSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
