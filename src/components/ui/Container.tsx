import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  const { children, className } = props;
  return (
    <div className={`w-[80%] my-0 mx-auto  ${className ?? ""} md:w-[85%]`}>
      {children}
    </div>
  );
};

export default Container;
