import React from "react";

interface Props {
  children?: React.ReactNode;
}

const GradientBackground = (props: Props) => {
  const { children } = props;

  return (
    <div
      className={`absolute top-[50%] left-[50%] w-full h-[60vh] flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={`absolute inset-0 flex flex-wrap m-auto pointer-events-none -z-10 blur-[8em] opacity-50 scale-80 -left-20`}
      >
        <span className="bg-[#042B41] w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl opacity-50 "></span>
        <span className="bg-[#0B2D32] w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl opacity-50 "></span>
        <span className="bg-[#0B1F32] w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl opacity-50 "></span>
        <span className="bg-[#04101B] w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl opacity-50 "></span>
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;
