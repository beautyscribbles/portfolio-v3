import ProjectDetails from "@/components/projects/ProjectDetails";
import Container from "@/components/ui/Container";

interface Props {
  params: { id: string };
}
// page when you refesh
const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <Container className="max-w-2xl">
 
      <ProjectDetails project={id} />
    </Container>
  );
};

export default page;
