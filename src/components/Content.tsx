import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Container from "@/components/ui/Container";

const Content = () => {
  return (
    <Container>
      <div className="md:hidden">
        <Navbar />
      </div>

      <Overview />
      <About />
      <Projects />
      <Skills />
    </Container>
  );
};

export default Content;
