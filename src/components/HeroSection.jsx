import HeroImages from "./HeroImages";

const HeroSection = () => {
  return (
    <>
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-28 max-sm:pb-36`}
      >
        <h1 className="text-4xl md:text-5xl text-center font-bold md:font-extrabold mt-32 md:mt-16 mb-8 md:mb-14 tracking-wider">
          Transform Your Space <br />
          with Elegance and Style
        </h1>

        {/* relative image container */}
        <div className="relative ">
          {/* hero image */}
          <div className="w-full md:w-[85%] aspect-[16/9] mx-auto overflow-hidden">
            <HeroImages />
          </div>

          {/* floating contact card */}
          <div className="w-fit p-4 md:p-8 border-t-4 bg-white border-t-[#a6a182] absolute shadow-lg animate-bounce-slow top-[80%] sm:top-[15%] right-[1%] sm:right-[3%] z-10">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">
              mi@manshainteriors.com
            </p>
          </div>

          {/* floating clients card */}
          <div className="w-fit p-4 md:p-8 border-t-4 bg-white border-t-[#a6a182] absolute shadow-lg animate-bounce-slow top-[95%] sm:top-[75%] left-[1%] sm:left-[3%] z-10">
            <p className="text-xl md:text-3xl font-bold text-[#A6A182]">104</p>
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
            <div className="my-4 md:my-8"></div>
            <p className="text-xl md:text-3xl font-bold text-[#A6A182]">98</p>
            <p className="text-sm sm:text-base">AWARDS RECEIVED</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
