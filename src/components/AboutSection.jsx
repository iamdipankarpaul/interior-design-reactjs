import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import aboutImg from "../assets/about.avif";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#aboutImg", {
      scrollTrigger: {
        trigger: "#aboutImageCon",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      scale: 0,
      duration: 10,
    });
    tl.from("#aboutDetails", {
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      duration: 10,
      y: 100,
    });
  }, []);

  return (
    <section
      id="aboutSection"
      className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row-reverse gap-4 md:gap-8"
    >
      <div id="aboutDetails" className="flex flex-col justify-center">
        <div id="aboutHeading">
          <p className="text-[#A6A182] text-xl font-medium">ABOUT US</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold tracking-wider mt-4 mb-8">
            Elevate Your Space design
            <br />
            Elevate Your Life
          </h2>
        </div>
        <div id="aboutDetails">
          <p className="md:text-lg text-gray-500 my-4">
            One began as a collaborative architectural and landscape workshop,
            and has remained true to its trans-disciplinary way of thinking
            since its inception.
          </p>
          <p className="md:text-lg text-gray-500 my-4">
            Our work strives to enhance our sense of place, identity and
            relationship to others and the physical spaces we inhabit, whether
            feral or human-made. Museums, markets, reindeer observatories,
            landscapes and dollhouses get the same care and attention to
            purpose.
          </p>
        </div>
      </div>
      <div id="aboutImageCon" className="">
        <img
          id="aboutImg"
          src={aboutImg}
          className="h-full w-full object-cover"
          alt="about image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
