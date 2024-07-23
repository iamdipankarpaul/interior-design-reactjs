import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/services-page/ServiceSection";
import ProjectShowcase from "../components/services-page/ProjectShowcase";

const ServicesPage = () => {
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 200,
      duration: 1.3,
    });
  }, []);

  return (
    <>
      <PageHeader title="Our Services" />
      <ServiceSection />
      <ProjectShowcase />
    </>
  );
};

export default ServicesPage;
