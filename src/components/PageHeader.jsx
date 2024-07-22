import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PageHeader = ({title}) => {
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 200,
      duration: 1,
    });
  }, []);

  return (
    <div className="servicePage mt-14 w-full h-[30vh] sm:h-[50vh] lg:h-[60vh] bg-accent flex items-center justify-center">
      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl lg:text-7xl text-center text-balance font-dm-serif-display text-white"
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
