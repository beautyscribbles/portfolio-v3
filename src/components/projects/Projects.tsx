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
      <Link
        scroll={false}
        href={`/project/${name}#projects`}
        id={project.id.toString()}
        key={project.id}
        className={`relative ${masonry} flex items-center opacity-60 hover:opacity-100 transition-all ease-in-out duration-300 mb-3`}
      >
        <figure>
          <Image
            src={project.img}
            alt={name}
            width={300}
            height={200}
            className="object-cover rounded-lg sm:w-full cursor-pointer "
          />

          <figcaption className="my-2 ">
            <h3
              className={`${satoshiBold.className} flex justify-between items-center text-xl lowercase`}
            >
              <span>{name}</span>
              <span className="cursor-pointer">
                <TiArrowRight size={25} />
              </span>
            </h3>
            <p className="text-[0.9rem] opacity-50  lowercase">
              {project.title}
            </p>

            <p className="text-sm opacity-50 lowercase">
              {project.stack.join(", ")}
            </p>
          </figcaption>
        </figure>
      </Link>
    );
  });

  return (
    <Section sectionName="projects" className="min-h-[80rem] sm:min-h-0 ">
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
