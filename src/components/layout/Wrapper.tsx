import Content from "@/components/Content";
import Container from "@/components/ui/Container";

const Wrapper = () => {
  return (
    <div className=" h-[90vh] ">
      <Container className="grid grid-cols-1">
        <aside className="hidden"></aside>
        <main>
          <Content />
        </main>
      </Container>
    </div>
  );
};

export default Wrapper;
