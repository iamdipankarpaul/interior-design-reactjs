import { IconArrowNarrowUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "flex" : "none",
      }}
      className="btn btn-circle cursor-pointer fixed right-5 bottom-5 mix-blend-difference max-md:btn-sm"
    >
      <IconArrowNarrowUp stroke={3} />
    </button>
  );
};

export default ScrollToTop;
