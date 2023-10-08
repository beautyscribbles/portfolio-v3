"use client";

import { useSectionContext } from "@/context/SectionContext";
import React from "react";
interface Props {
  children: React.ReactNode;
  sectionName: string;
  className: string;
}

const Section = (props: Props) => {
  const { children, sectionName, className } = props;
  const { getSectionLink } = useSectionContext();

  const id = getSectionLink(sectionName);

  return (
    <section
      className={`${className} h-screen w-full flex items-center justify-start`}
      id={`${id}`}
    >
      {children}
    </section>
  );
};

export default Section;
