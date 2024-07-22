import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const ImageReveal = ({ src, alt }) => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const imageOverlayRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      scale: 1.3,
      duration: 5,
    });
    tl.to(
      imageOverlayRef.current,
      {
        top: 0,
        left: 0,
        width: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
          once: true,
        },
      },
      0
    );
  }, []);

  return (
    <div
      ref={imageContainerRef}
      id="imageContainer"
      className="relative overflow-hidden"
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <div
        ref={imageOverlayRef}
        className="imageOverlay absolute top-0 left-0 w-full h-full bg-accent"
      ></div>
    </div>
  );
};

export default ImageReveal;
