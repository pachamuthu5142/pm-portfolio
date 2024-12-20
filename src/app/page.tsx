import About from "@/components/about/about";
import AboutMe from "@/components/about/AboutMe";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (<>
    <div className="header-and-herosection">
      <Header />
      <HeroSection />
    </div>
    <About />
    <Services />
    <AboutMe />
    <Skills />
    <Projects />
    <Footer />
  </>
  );
}
