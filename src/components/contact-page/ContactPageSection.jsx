import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import TextReveal from "../TextReveal";

const ContactPageSection = () => {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 bg-gray-100 text-gray-900">
      <div className="grid grid-cols-1 lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center md:items-center">
          <TextReveal>
            <h1 className="text-2xl sm:text-4xl font-dm-serif-display">
              Get in touch
            </h1>
            <p className="pt-2 pb-4 md:text-lg">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-4">
                <IconMapPin stroke={2} />
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center gap-4">
                <IconPhone stroke={2} />
                <span>123456789</span>
              </p>
              <p className="flex items-center gap-4">
                <IconMail stroke={2} />
                <span>contact@business.com</span>
              </p>
            </div>
          </TextReveal>
        </div>

        <TextReveal>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Type name here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="Type email here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                className="block w-full textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </label>
            <button type="button" className="btn btn-info">
              Submit
            </button>
          </form>
        </TextReveal>
      </div>
    </section>
  );
};

export default ContactPageSection;
