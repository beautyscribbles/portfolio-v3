import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Container from "@/components/ui/Container";

const Content = () => {
  return (
    <Container>
      <div className="md:hidden">
        <Navbar />
      </div>

      <Overview />
      <About />
    </Container>
  );
};

export default Content;
