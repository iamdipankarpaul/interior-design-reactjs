import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import aboutImg from "../../assets/about.avif";
import ImageReveal from "../ImageReveal";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
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
    <>
      <section
        id="aboutSection"
        className=" px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <ImageReveal
              src={aboutImg}
              alt="interior design service image"
              classNames="h-64 md:h-96 lg:h-full"
            />

            <div id="aboutDetails" className="flex flex-col justify-center">
              <p className="text-accent text-xl font-semibold md:font-bold">
                ABOUT US
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider">
                Interior Design
              </h2>

              <p className="mt-4 text-gray-600 lg:text-lg">
                We instill a sense of continuity and connection to the larger
                world by designing a building from the inside-out as well as the
                outside-in. Any design solution must begin with an understanding
                of people&apos;s needs and how a space will be used. The goal is
                to create functional and elegant interiors that evoke a sense of
                place and complement a building&apos;s outward expression.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
