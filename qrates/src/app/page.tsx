import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/HeroSection";
import Main from "@/components/layouts/Main";
import ProcessSection from "@/components/sections/process/ProcessSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import SmallCtaSection from "@/components/sections/small-cta/SmallCtaSection";
import StatementSection from "@/components/sections/StatementSection";
import SupportSection from "@/components/sections/support/SupportSection";
import CommunitySection from "@/components/sections/community/CommunitySection";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <StatementSection />
        <ProcessSection />
        <SmallCtaSection />
        <ServicesSection />
        <SupportSection />
        <CommunitySection />
      </Main>
    </>
  );
}
