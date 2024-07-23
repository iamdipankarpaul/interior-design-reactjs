import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/services-page/ServiceSection";
// import ProjectShowcase from "../components/services-page/ProjectShowcase";
import ServiceSteps from "../components/services-page/ServiceSteps";

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" />
      <ServiceSection />
      {/* <ProjectShowcase /> */}
      <ServiceSteps />
    </>
  );
};

export default ServicesPage;
