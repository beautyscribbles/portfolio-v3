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
      <div className="fixed top-0 bg-blue-200">{id}</div>;
    </Modal>
  );
};

export default page;
