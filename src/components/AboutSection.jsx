import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import aboutImg from "../assets/about.avif";
import { useRef } from "react";

const AboutSection = () => {
  const imageOverlayRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#aboutImg", {
      scrollTrigger: {
        trigger: "#aboutImageCon",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      scale: 1.3,
      duration: 5,
    });
    tl.to(imageOverlayRef.current, {
      top: 0,
      left: 0,
      width: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: "#aboutImageCon",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        once: true,
      }
    }, 0)
    tl.from("#aboutDetails", {
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      duration: 10,
      y: 100,
    });
  }, []);

  return (
    <section
      id="aboutSection"
      className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row-reverse gap-4 md:gap-8"
    >
      <div id="aboutDetails" className="flex flex-col justify-center">
        <div id="aboutHeading">
          <p className="text-accent text-xl font-semibold md:font-bold">ABOUT US</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider my-4">
            Elevate Your Space
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
      <div id="aboutImageCon" className="relative overflow-hidden">
        <img
          id="aboutImg"
          src={aboutImg}
          className="h-full w-full object-cover"
          alt="about image"
        />
      <div ref={imageOverlayRef} className="imageOverlay absolute top-0 left-0 w-full h-full bg-accent"></div>
      </div>
    </section>
  );
};

export default AboutSection;
