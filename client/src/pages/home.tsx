import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import RecruitmentStandards from "@/components/sections/recruitment-standards";
import OurServicesDetailed from "@/components/sections/our-services-detailed";
import OurCommitment from "@/components/sections/our-commitment";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <RecruitmentStandards />
        <OurServicesDetailed />
        <OurCommitment />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
