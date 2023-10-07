import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="h-screen relative w-full grid grid-cols-1 md:grid-cols-[40%,60%] lg:grid-cols-[35%,65%]">
      <div className="hidden h-screen md:grid md:fixed md:w-[40%] lg:w-[35%]">
        <Sidebar />
      </div>
      <main className="h-full md:absolute md:left-[40%] lg:left-[35%] ">
        <Content />
      </main>
    </div>
  );
};

export default Wrapper;
