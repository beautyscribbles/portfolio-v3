import React from "react";

interface Props {
  children: React.ReactNode;
}

const GradientBackground = (props: Props) => {
  const { children } = props;
  return (
    <div
      className={`relative h-[85vh] flex flex-col items-center justify-center `}
    >
      <div
        className={`absolute inset-0 flex flex-wrap m-auto pointer-events-none -z-10 blur-[8em] opacity-50  scale-80 -left-20`}
      >
        <div className="w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl bg-[#042B41]"></div>
        <div className="w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl bg-[#0B2D32]"></div>
        <div className="w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl  bg-[#0B1F32]"></div>
        <div className="w-1/2 rounded-full h-1/2 first:scale-125 last:scale-125 blur-3xl bg-[#04101B]"></div>
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;
