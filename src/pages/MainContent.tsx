import HeroSection from "../components/HeroSection";
import SummarySection from "../components/SummarySection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ArtifactsSection from "../components/ArtifactsSection";

export default function MainContent() {
  return (
    <>
      <HeroSection />
      <SummarySection />
      <AboutSection />
      <PortfolioSection/>
      <ArtifactsSection/>
    </>
  );
}
