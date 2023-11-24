import ProjectMeta from "@/components/projects/ProjectMeta";
import { satoshiBlack } from "@/components/utils/font";
import projectInfo from "@/components/utils/projectInfo";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsBroadcast } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";

interface Props {
  project: string;
}

const ProjectDetails = (props: Props) => {
  const { project } = props;
  const currentProject = projectInfo.get(project)!

  const paragraphs = Object.values(currentProject.paragraphs).map((paragraph, index) => {
            return (
              <p className="parapgraph" key={index}>
                {paragraph}
              </p>
            );
          })

  return (
    <section className="flex flex-col gap-12 py-8">
      <header className="border-b-[1px] border-secondary/80">
        {currentProject.icon}
        <br></br>

        <h1 className={`${satoshiBlack.className} text-4xl lowercase`}>{currentProject.name}</h1>
        <br></br>

        <div className="py-4">
          <ProjectMeta
            icon={<AiFillGithub size={25} />}
            name="Stack"
            content={currentProject.stack}
          />
          <ProjectMeta
            icon={<HiOutlineCode size={25} />}
            name="Source"
            content={currentProject.source}
          />
          <ProjectMeta
            icon={<BsBroadcast size={25} />}
            name="Demo"
            content={currentProject.demo}
          />
        </div>
      </header>

      <article className="flex flex-col gap-12">
        <Image
          src={currentProject.img}
          alt={currentProject.name}
          width={500}
          height={300}
          quality={100}
          className="rounded-md w-full object-cover"
        />

        <h1 className={`${satoshiBlack.className} text-4xl lowercase`}>
          {currentProject.title}
        </h1>

        {paragraphs}   
      </article>
    </section>
  );
};

export default ProjectDetails;
