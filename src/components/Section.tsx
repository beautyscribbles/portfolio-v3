import React from "react";
interface Props {
  children: React.ReactNode;
  id: number;
  className: string;
}

const Section = (props: Props) => {
  const { children, id, className } = props;
  return (
    <section
      className={`${className} h-full flex items-center justify-start`}
      id={`${id}`}
    >
      {children}
    </section>
  );
};

export default Section;
