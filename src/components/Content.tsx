import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import { Fragment } from "react";

const Content = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>

      <div className="max-w-[600px] ">
        <Overview />
        <About />
      </div>
    </Fragment>
  );
};

export default Content;
