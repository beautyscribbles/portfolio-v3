import ProjectDetails from "@/components/projects/ProjectDetails";
import Container from "@/components/ui/Container";
import { satoshiMedium } from "@/components/utils/font";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

interface Props {
  params: { id: string };
}
// page when you refesh
const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <div>
      <header className="flex gap-4 p-4 items-center text-sm px-2">
        <Link href="/#projects" className="flex gap-1">
          <IoChevronBack className="cursor-pointer" size={20} />
        </Link>
        <p>
          Projects / <span className={`${satoshiMedium.className}`}>{id}</span>
        </p>
      </header>

    <Container className="max-w-2xl pb-16">
        <ProjectDetails project={id} />
        
        <Link href="/#projects" className="flex gap-1 mt-2 opacity-80 items-center text-secondary"> <IoChevronBack className="cursor-pointer" size={20} /> <span className="hover:underline hover:underline-offset-4">
        Back to Projects</span></Link>
      </Container>
      </div>
  );
};

export default page;
