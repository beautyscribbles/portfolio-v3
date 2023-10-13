"use client";

import { useSectionContext } from "@/context/SectionContext";
import React, { useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  sectionName: string;
  className: string;
}

const Section = (props: Props) => {
  const { children, sectionName, className } = props;

  const { getSectionDetails, setCurrentSection } = useSectionContext();
  const ref = useRef<HTMLElement>(null);
  const sectionDetails = getSectionDetails(sectionName);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setCurrentSection(sectionDetails);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [sectionDetails, setCurrentSection]);

  return (
    <section
      ref={ref}
      className={`${className} h-screen w-full flex items-center justify-start`}
      id={`${sectionDetails.link}`}
    >
      {children}
    </section>
  );
};

export default Section;
