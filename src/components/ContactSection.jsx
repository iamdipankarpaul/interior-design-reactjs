import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ContactSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#contactHeading", {
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      duration: 3,
    });
    tl.from("#contactDetails", {
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      duration: 3,
    });
  }, []);

  return (
    <section
      id="contactSection"
      className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row gap-4 md:gap-6"
    >
      <div id="contactHeading" className="md:w-1/2">
        <p className="text-accent text-xl font-semibold md:font-bold">CONTACT US</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold tracking-wider mt-4 mb-4 md:mb-8">
          Have Any Questions
          <br />
          Contact Us
        </h2>
      </div>
      <div
        id="contactDetails"
        className="flex flex-col justify-center md:w-1/2 md:text-right"
      >
        <p className="md:text-lg text-gray-400 my-2">Monday-Friday: 10AM-7PM</p>
        <p className="md:text-lg">
          <span className="font-medium">Number: </span>+91 96099 30991 / 98320
          49481
        </p>
        <p className="md:text-lg">
          <span className="font-medium">Location: </span>Shop 33, 2nd Floor, The
          Planet Mall Sevoke Road, Siliguri -734001
        </p>
        <p className="md:text-lg">
          <span className="font-medium">Email: </span>mi@manshainteriors.com
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
