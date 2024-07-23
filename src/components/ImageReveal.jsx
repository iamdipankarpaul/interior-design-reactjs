import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = ({ src, alt, classNames = "" }) => {
  const revealContainerRef = useRef(null);

  useGSAP(() => {
    const container = revealContainerRef.current;
    const image = container.querySelector("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        once: true,
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.2, {
      xPercent: -100,
      ease: "power2.out",
    });
    tl.from(image, 1.2, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.2,
      ease: "power2.out",
    });

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div
      className={`reveal overflow-hidden relative + ${classNames}`}
      ref={revealContainerRef}
    >
      <img
        className="h-full w-full object-cover origin-left"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageReveal;
