"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

const images = [
  { id: 1, src: "/bookmark.png", name: "bookmark" },
  { id: 2, src: "/moviememory.png", name: "movie-memory" },
  { id: 3, src: "/finestandco.jpeg", name: "finest-and-co" },
  { id: 4, src: "/natura.jpeg", name: "natura" },
];

const Projects = () => {
  const projects = images.map((image) => {
    const masonry = image.id % 2 === 0 ? "ml-auto sm:ml-0 sm:top-12 " : "";

    return (
      <Link
        href={`/project/${image.name}`}
        id={image.id.toString()}
        onClick={() => console.log(image.name)}
        key={image.id}
        className={`relative ${masonry} flex items-center opacity-60 hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer`}
      >
        <Image
          src={image.src}
          alt={image.name}
          width={300}
          height={200}
          className="object-cover rounded-lg sm:w-full "
        />
      </Link>
    );
  });

  return (
    // <Section sectionName="projects" className="min-h-[60rem] sm:min-h-0 ">
    <article className="flex flex-col gap-24 w-full">
      <Heading text="projects." />

      <ul className="grid grid-cols-1 gap-8 w-full  sm:grid-cols-2">
        {projects}
      </ul>
    </article>
  );
};

export default Projects;
