import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievements />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;