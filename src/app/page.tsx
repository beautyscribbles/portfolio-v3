import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/ui/Container";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="h-screen  overflow-hidden overflow-y-scroll">
        <Container className="grid grid-cols-1">
          <div className="hidden">
            <Sidebar />
          </div>
          <main className=" ">
            <Content />
          </main>
        </Container>
      </div>
    </Fragment>
  );
}
