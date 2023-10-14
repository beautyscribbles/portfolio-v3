interface Props {
  project: string;
}

const ProjectDetails = (props: Props) => {
  const { project } = props;

  return <div>ProjectDetails for {project} </div>;
};

export default ProjectDetails;
