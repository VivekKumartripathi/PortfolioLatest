import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Architecture from "@/components/Architecture";
import CaseStudies from "@/components/CaseStudies";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import Capabilities from "@/components/Capabilities";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommandPalette from "@/components/CommandPalette";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Impact />
        <Architecture />
        <CaseStudies />
        <Work />
        <Capabilities />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <Spotlight />
      <CommandPalette />
      <Toast />
    </>
  );
}
