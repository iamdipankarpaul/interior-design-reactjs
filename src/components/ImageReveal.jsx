import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = ({ src, alt, classNames = "", imageClassNames = "" }) => {
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
      className={`reveal overflow-hidden relative h-full w-full ${classNames}`}
      ref={revealContainerRef}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover origin-left ${imageClassNames}`}
      />
    </div>
  );
};

export default ImageReveal;
