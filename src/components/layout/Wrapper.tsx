import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-[40%,60%] lg:grid-cols-[35%,65%]">
      <div className="hidden h-screen md:block ">
        <Sidebar />
      </div>
      <main className="overflow-y-scroll no-scrollbar h-full">
        <Content />
      </main>
    </div>
  );
};

export default Wrapper;
