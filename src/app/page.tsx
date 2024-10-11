import About from "@/components/about/about";
import AboutMe from "@/components/about/AboutMe";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (<>
    <div className="header-and-herosection">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <AboutMe />
      <Skills />
    </div>
  </>
  );
}
