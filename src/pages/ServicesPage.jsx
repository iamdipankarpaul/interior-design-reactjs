import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/services-page/ServiceSection";
import ServiceSteps from "../components/services-page/ServiceSteps";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Design Services for Your Needs"
      />
      <ServiceSection />
      <ServiceSteps />
    </>
  );
};

export default ServicesPage;
