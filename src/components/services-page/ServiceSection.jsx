import ImageReveal from "../ImageReveal";
import TextReveal from "../TextReveal";

const ServiceSection = () => {
  return (
    <>
      <section className="px-4 py-6 sm:px-8 sm:py-8 lg:px-8 lg:py-12">
        <header className="text-center px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider md:max-w-xl text-center mx-auto">
            We provide different types of Interior design
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8">
          <div className="">
            <ImageReveal
              src="https://assets.website-files.com/6333ddbf4600453f512ca9f6/6339756537b872aaabd34f00_2-1.jpg"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Home Interior
              </h2>
              <p className="md:text-lg">
                Transform your living space into a sanctuary of comfort and
                style. Our designs reflect your personality, making your house
                truly feel like home.
              </p>
            </TextReveal>
          </div>

          <div className="">
            <ImageReveal
              src="https://images.unsplash.com/photo-1705909772719-8d3bf32552be?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Office Interior
              </h2>
              <p className="md:text-lg">
                Create a productive and inspiring work environment. We design
                offices that boost efficiency and reflect your brand&apos;s
                identity.
              </p>
            </TextReveal>
          </div>

          <div className="">
            <ImageReveal
              src="https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Restaurant Interior
              </h2>
              <p className="md:text-lg">
                Designing memorable dining experiences with ambiance and
                functionality. Our restaurant interiors blend aesthetic appeal
                with practical solutions.
              </p>
            </TextReveal>
          </div>

          <div className="">
            <ImageReveal
              src="https://plus.unsplash.com/premium_photo-1663013668671-d453f319544f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Furniture Solutions
              </h2>
              <p className="md:text-lg">
                Custom furniture designs tailored to fit your space perfectly.
                Our pieces combine functionality with stunning design.
              </p>
            </TextReveal>
          </div>

          <div className="">
            <ImageReveal
              src="https://assets.website-files.com/6333ddbf4600453f512ca9f6/634111424585b439948edaec_2-3.jpg"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Color Design
              </h2>
              <p className="md:text-lg">
                Expert color consulting to create the perfect palette for your
                space. Our designs use color to evoke the right mood and enhance
                your interior.
              </p>
            </TextReveal>
          </div>

          <div className="">
            <ImageReveal
              src="https://images.unsplash.com/photo-1721294104781-4f00f6ffef99?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="interior design service image"
              classNames="h-72 mb-4"
            />

            <TextReveal>
              <h2 className="font-dm-serif-display text-xl sm:text-3xl lg:text-4xl mb-2">
                Architecture Design
              </h2>
              <p className="md:text-lg">
                Innovative architectural solutions that blend aesthetics and
                functionality. We design buildings that are both beautiful and
                practical.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
