import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/home/HeroSection";
import CredibilityBar from "@/components/sections/home/CredibilityBar";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import WhyUs from "@/components/sections/home/WhyUs";
import Statistics from "@/components/sections/home/Statistics";
import CTABanner from "@/components/sections/home/CTABanner";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CredibilityBar />
      <ServicesPreview />
      <WhyUs />
      <Statistics />
      <CTABanner />
    </Layout>
  );
};

export default HomePage;
