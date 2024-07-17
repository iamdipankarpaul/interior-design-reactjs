import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.js";

const OwlComponent = () => {
  const items = [
    "Testimonial1",
    "Testimonial2",
    "Testimonial3",
    "Testimonial4",
    "Testimonial5",
  ];
  return (
    <section className="p-4 sm:p-6 md:p-8">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        items={1}
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        autoplaySpeed={1}
      >
        {items.map((item, idx) => (
          <div key={idx} className="h-14 text-center bg-red-500">
            <h4>{item}</h4>
          </div>
        ))}
      </OwlCarousel>
      {/* 
      <img
              src={item}
              alt="hero image"
              className="h-full w-full hover:scale-105 duration-300"
            />
      */}
    </section>
  );
};

export default OwlComponent;
