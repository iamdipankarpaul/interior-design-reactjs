import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { features } from "../../data/features";

const FeaturesSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#featuresHeadings", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#featureSection",
        start: "top 80%",
        end: "50% 40%",
        scrub: true,
        once: true,
      },
    }).from(".features", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#featuresContainer",
        start: "top 80%",
        end: "50% 50%",
        scrub: true,
        once: true,
      },
    });
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-6" id="featureSection">
      <div id="featuresHeadings">
        <p className="text-accent text-xl font-semibold md:font-bold">
          BEST SERVICE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider my-6">
          Designing Future Rooms <br />
          One at a Time
        </h2>
      </div>

      <div
        id="featuresContainer"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {features.map((feature) => (
          <div
            key={feature?.id}
            className="features card bg-base-100 shadow-xl rounded-none border-b-4 border-l-4 border-b-accent border-l-accent"
          >
            <div className="card-body py-4">
              <h2 className="text-2xl tracking-wider font-medium">
                {feature.heading}
              </h2>
              <p className="md:text-lg text-gray-500 my-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="features card bg-base-100 shadow-xl rounded-none border-b-4 border-l-4 border-b-accent border-l-accent">
          <div className="card-body py-4">
            <h2 className="text-2xl tracking-wider font-medium">
              Art and Decor Curation
            </h2>
            <p className="md:text-lg text-gray-500 my-4">
              Enhance your interiors with our art and decor curation services. We help you select the perfect pieces, from paintings to sculptures and decorative items, ensuring they complement and elevate your overall design theme.
            </p>
          </div>
        </div>

        <div className="features card bg-base-100 shadow-xl rounded-none border-b-4 border-l-4 border-b-accent border-l-accent">
          <div className="card-body py-4">
            <h2 className="text-2xl tracking-wider font-medium">
              Luxury Interior Design
            </h2>
            <p className="md:text-lg text-gray-500 my-4">
              Experience the pinnacle of elegance and sophistication with our
              luxury interior design services. We craft bespoke interiors using
              the finest materials, exclusive furnishings, and meticulous
              attention to detail, creating spaces that exude opulence and
              style.
            </p>
          </div>
        </div>

        <div className="features card bg-base-100 shadow-xl rounded-none border-b-4 border-l-4 border-b-accent border-l-accent">
          <div className="card-body py-4">
            <h2 className="text-2xl tracking-wider font-medium">
              Sustainable Design Solutions
            </h2>
            <p className="md:text-lg text-gray-500 my-4">
              Embrace eco-friendly living with our sustainable design solutions.
              We incorporate environmentally responsible practices and materials
              into your interiors, creating beautiful, healthy, and sustainable
              spaces.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
