"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type Section = { id: number; name: string; link: string };

type SectionContext = {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
  sections: Section[];
  getSectionLink(name: string): string;
};

export const SectionContext = createContext<SectionContext | null>(null);

export default function SectionContextProvider(props: Props) {
  const { children } = props;

  const sections: Section[] = [
    { id: 0, name: "intro", link: "intro" },
    { id: 1, name: "about", link: "about" },
    { id: 2, name: "projects", link: "projects" },
    { id: 3, name: "skills", link: "skills" },
    { id: 4, name: "contact", link: "contact" },
    { id: 5, name: "blogs", link: "blogs" },
  ];

  function getSectionLink(name: string) {
    const section = sections.find((section) => section.name === name);

    if (!section) throw new Error("Section does not exist");

    return section.link;
  }

  const [currentSection, setCurrentSection] = useState(sections[0].id);

  const values = {
    currentSection,
    setCurrentSection,
    sections,
    getSectionLink,
  };

  return (
    <SectionContext.Provider value={values}>{children}</SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === null) {
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider"
    );
  }
  return context;
}
