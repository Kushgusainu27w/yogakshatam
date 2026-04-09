import { AboutSection } from "@/components/AboutSection";
import { ClassesSection } from "@/components/ClassesSection";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Layout } from "@/layouts/Layout";

export default function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ClassesSection />
      <ScheduleSection />
      <PricingSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  );
}
