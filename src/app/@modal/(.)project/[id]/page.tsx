import ProjectDetails from "@/components/projects/ProjectDetails";
import Modal from "@/components/ui/Modal";
import ProjectBackground from "@/components/ui/ProjectBackground";

interface Props {
  params: { id: string };
}

const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <Modal>
      <ProjectBackground>
        <ProjectDetails project={id} />
      </ProjectBackground>
    </Modal>
  );
};

export default page;
