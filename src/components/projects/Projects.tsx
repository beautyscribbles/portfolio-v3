import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiBold } from "@/components/utils/font";
import projectInfo from "@/components/utils/projectInfo";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const Projects = () => {
  const projectData = Array.from(projectInfo).map(([_, value], i) => {
    return {
      id: i,
      name: value.key,
      img: value.img,
      stack: value.stack,
      title: value.title,
    };
  });

  const projects = projectData.map((project) => {
    const masonry = project.id % 2 !== 0 ? "ml-auto sm:ml-0 sm:top-12 " : "";
    const name = project.name.toLowerCase();

    return (
      <figure
        key={project.id}
        className={`opacity-60 hover:opacity-100 animation mb-3 max-w-[18.75rem] relative ${masonry}`}
      >
        <Link
          scroll={false}
          href={`/project/${name}#projects`}
          id={project.id.toString()}
        >
          <Image
            src={project.img}
            alt={name}
            width={300}
            height={200}
            className="object-cover rounded-lg sm:w-full cursor-pointer animation hover:border-primary border-2 border-transparent"
          />
        </Link>

        <figcaption className="my-2 ">
          <h3
            className={`${satoshiBold.className} flex justify-between items-center text-xl lowercase`}
          >
            <span>{name}</span>
            <Link href={`/project/${name}#projects`} scroll={false}>
              <TiArrowRight size={25} />
            </Link>
          </h3>
          <p className="text-[0.9rem] opacity-50  lowercase">{project.title}</p>

          <p className="text-sm opacity-50 lowercase">
            {project.stack
              .join(", ")
              .toLowerCase()
              .replace("redux toolkit", "redux")}
          </p>
        </figcaption>
      </figure>
    );
  });

  return (
    <Section sectionName="projects" className="spacing">
      <article className="flex flex-col gap-24 w-full">
        <Heading text="projects." />

        <ul className="grid grid-cols-1 gap-8 w-full  sm:grid-cols-2 lg:gap-12">
          {projects}
        </ul>
      </article>
    </Section>
  );
};

export default Projects;
