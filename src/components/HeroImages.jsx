import OwlCarousel from "react-owl-carousel";

import heroImg1 from "../assets/hero-images/hero1.jpg";
import heroImg2 from "../assets/hero-images/hero2.avif";
import heroImg3 from "../assets/hero-images/hero3.avif";
import heroImg4 from "../assets/hero-images/hero4.avif";
import heroImg5 from "../assets/hero-images/hero5.avif";

const HeroImages = () => {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      items={1}
      autoplay
      autoplayTimeout={3000}
      autoplayHoverPause={true}
      autoplaySpeed={1}
      dots={false}
    >
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt="hero image"
          className="h-full w-full object-cover hover:scale-105 duration-300"
        />
      ))}
    </OwlCarousel>
  );
};

export default HeroImages;
