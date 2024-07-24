import { useEffect } from "react";
import ContactPageSection from "../components/contact-page/ContactPageSection";
import PageHeader from "../components/PageHeader";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's Start a Conversation About Your Space"
      />
      <ContactPageSection />
    </>
  );
};

export default ContactPage;
