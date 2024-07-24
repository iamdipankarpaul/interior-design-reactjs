import AboutPageSection from "../components/about-page/AboutPageSection";
import PageHeader from "../components/PageHeader";
import { aboutUsContent } from "../data/about-page-content";
aboutUsContent;

const AboutUsPage = () => {
  return (
    <>
      <PageHeader
        title={aboutUsContent.title}
        subtitle={aboutUsContent.subtitle}
      />
      <AboutPageSection section={aboutUsContent.sections.welcome} opposite />
      <AboutPageSection section={aboutUsContent.sections.mission} />
      <AboutPageSection section={aboutUsContent.sections.commitment} opposite />
      <AboutPageSection section={aboutUsContent.sections.contact} contact />
    </>
  );
};

export default AboutUsPage;
