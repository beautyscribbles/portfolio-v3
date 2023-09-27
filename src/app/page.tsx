import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Overview />
    </Fragment>
  );
}
