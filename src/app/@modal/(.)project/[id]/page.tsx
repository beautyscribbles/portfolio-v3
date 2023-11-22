import ProjectDetails from "@/components/projects/ProjectDetails";
import Modal from "@/components/ui/Modal";

interface Props {
  params: { id: string };
}

const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <Modal>
      <ProjectDetails project={id} />
    </Modal>
  );
};

export default page;
