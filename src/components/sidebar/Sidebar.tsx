"use client";

import Navbar from "@/components/Navbar";
import PageNumber from "@/components/sidebar/PageNumber";
import Container from "@/components/ui/Container";
import { useSectionContext } from "@/context/SectionContext";
import Link from "next/link";

type Section = { id: number; name: string; link: string };

const Sidebar = () => {
  const { sections } = useSectionContext();

  const list = sections.map((section) => {
    return (
      <li key={section.id} className="">
        <Link
          href={`#${section.link}`}
          className="grid grid-cols-[1fr,2fr] gap-2 w-32"
        >
          <p className="grid place-self-center">{section.id}.</p>
          <p>#&nbsp;{section.name}</p>
        </Link>
      </li>
    );
  });

  return (
    <aside className="h-full">
      <Container className="h-full">
        <Navbar />

        <div className="h-[80%] grid grid-cols-[20%,80%]">
          <PageNumber />
          <ul className="grid place-items-center  ">
            <div className="flex flex-col gap-5">{list}</div>
          </ul>
        </div>
      </Container>
    </aside>
  );
};

export default Sidebar;
