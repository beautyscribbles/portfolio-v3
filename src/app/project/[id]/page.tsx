interface Props {
  params: { id: string };
}

const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return <div>currently on project {id}</div>;
};

export default page;
