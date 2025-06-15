import AboutHero from "../components/AboutHero";
import CompanyStats from "../components/CompanyStats";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import TeamSection from "../components/TeamSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCTA from "../components/AboutCTA";
import Footer from "./../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CompanyStats />
      <CompanyStory />
      <MissionVision />
      <TeamSection />
      <WhyChooseUs />
      <AboutCTA />
      <Footer />
    </div>
  );
}
