const PageNumber = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="border-l-[1px] border-light h-20"></div>

      <p className="border border-light p-4 rounded-full opacity-100 important">
        <span className="text-primary">00</span>
      </p>

      <div className="border-l-[1px] border-light h-20"></div>
    </div>
  );
};

export default PageNumber;
