import PageHeader from "../components/PageHeader";
import { faqsPageContent } from "../data/faq-page-content";

const FaqsPage = () => {
  return (
    <>
      <PageHeader
        title={faqsPageContent.title}
        subtitle={faqsPageContent.subtitle}
      />
    </>
  );
};

export default FaqsPage;
