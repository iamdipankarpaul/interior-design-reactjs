import PageHeader from "../components/PageHeader";
import FounderSection from "../components/teams-page/FounderSection";
import TeamSection from "../components/teams-page/TeamSection";

const TeamPage = () => {
  return (
    <>
      <PageHeader title="Team Members" />
      <FounderSection />
      <TeamSection />
    </>
  );
};

export default TeamPage;
