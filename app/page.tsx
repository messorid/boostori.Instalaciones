import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection"
import GallerySection from "./components/GallerySection"
import WhyUsSection from "./components/WhyUsSection"
import FinalCTA from "./components/FinalCTA"
import TestimonialsSection from "./components/TestimonialsSection";
import LocationSection from "./components/LocationSection";
import StatsSection from "./components/StatsSection";
import ContactFormSection from "./components/ContactFormSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection/>
      <GallerySection/>
      <WhyUsSection/>
      <TestimonialsSection />
<LocationSection />
<ContactFormSection />
      <FinalCTA/>
    </main>
  );
}