import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const AchievementSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".achievement", {
      innerText: 0,
      duration: 5,
      stagger: 0.3,
      snap: {
        innerText: 1,
      },
      scrollTrigger: {
        trigger: "#achievementDetails",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <section
      data-theme="dark"
      id="achievementSection"
      className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-4 md:gap-8"
    >
      <div id="achievementHeading" className="max-w-lg">
        <p className="text-[#A6A182] text-xl font-medium">TRUSTED EXPERIENCE</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold tracking-wider mt-4 mb-8">
          Modern Design Solutions
        </h2>
      </div>

      <div
        id="achievementDetails"
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full h-fit place-self-center"
      >
        <div className=" stats shadow">
          <div className="stat">
            <div className="stat-value text-[#A6A182]">
              <span className="achievement">4</span>M
            </div>
            <div className="stat-desc whitespace-normal">SQUARE FEET BUILT</div>
          </div>
        </div>

        <div className=" stats shadow">
          <div className="stat">
            <div className="stat-value text-[#A6A182]">
              <span className="achievement">104</span>
            </div>
            <div className="stat-desc whitespace-normal">HAPPY CLIENTS</div>
          </div>
        </div>

        <div className=" stats shadow">
          <div className="stat">
            <div className="stat-value text-[#A6A182]">
              <span className="achievement">98</span>
            </div>
            <div className="stat-desc whitespace-normal">AWARDS RECEIVED</div>
          </div>
        </div>

        <div className=" stats shadow">
          <div className="stat">
            <div className="stat-value text-[#A6A182]">
              <span className="achievement">105</span>
            </div>
            <div className="stat-desc whitespace-normal">WORK IN PROGRESS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
