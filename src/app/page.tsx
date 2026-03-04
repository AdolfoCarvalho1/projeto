import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AlertSection from "@/components/AlertSection";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import ScrollTop from "@/components/ScrollTop";
import EffectsHandler from "@/components/EffectsHandler";

export default function Home() {
  return (
    <main>
      <EffectsHandler />
      <Navbar />
      <Hero />
      <AlertSection />
      <Features />
      <Showcase />
      <Pricing />
      <FAQ />
      <Footer />
      <Countdown />
      <ScrollTop />
    </main>
  );
}
