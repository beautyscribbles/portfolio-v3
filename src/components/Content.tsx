import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Container from "@/components/ui/Container";

const Content = () => {
  return (
    <Container className="md:pr-8">
      <div className="md:hidden">
        <Navbar />
      </div>

      <Overview />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Content;
