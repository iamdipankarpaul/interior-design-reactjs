import heroImg1 from "../assets/hero.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeroSection = () => {
  const headingRef = useRef(null);
  const headingText = "Transform Your Space with Elegance and Style";

  const splitText = headingText.split("").map((char, index) => (
    <span key={index} className="char">
      {char}
    </span>
  ));

  useGSAP(() => {
    gsap.fromTo(
      ".char",
      { opacity: 0 },
      { opacity: 1, stagger: 0.03, duration: 1 }
    );
  }, []);

  return (
    <>
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-28 max-sm:pb-36`}
      >
        {/* hero heading text */}
        <h1
          ref={headingRef}
          id="heroHeading"
          className="text-4xl sm:text-5xl text-center font-bold md:font-extrabold mt-32 md:mt-16 mb-8 md:mb-14 tracking-wider text-balance md:w-3/4 mx-auto"
        >
          {splitText}
        </h1>

        {/* relative image container */}
        <div className="relative ">
          {/* hero image */}
          <div className="w-full md:w-[85%] aspect-[16/9] mx-auto overflow-hidden">
            <img
              src={heroImg1}
              alt="hero image"
              className="h-full w-full object-cover hover:scale-105 duration-300"
            />
          </div>

          {/* floating contact card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[80%] sm:top-[15%] right-[1%] sm:right-[3%] z-10">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">
              mi@manshainteriors.com
            </p>
          </div>

          {/* floating clients card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[95%] sm:top-[75%] left-[1%] sm:left-[3%] z-10">
            <p className="text-xl md:text-3xl font-bold text-accent">104</p>
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
            <div className="my-4 md:my-8"></div>
            <p className="text-xl md:text-3xl font-bold text-accent">98</p>
            <p className="text-sm sm:text-base">AWARDS RECEIVED</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
