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
      <PageHeader title="Contact Us" />
      <ContactPageSection />
    </>
  );
};

export default ContactPage;
