import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";

type Section = { id: number; name: string; link: string };

const Sidebar = () => {
  const sections: Section[] = [
    { id: 0, name: "intro", link: "intro" },
    { id: 1, name: "about", link: "about" },
    { id: 2, name: "projects", link: "projects" },
    { id: 3, name: "skills", link: "skills" },
    { id: 4, name: "contact", link: "contact" },
    { id: 5, name: "blogs", link: "blogs" },
  ];

  const list = sections.map((section) => {
    return (
      <li key={section.id} className="">
        <a href="#"># {section.name}</a>
      </li>
    );
  });

  return (
    <aside className="h-full">
      <Container className=" h-full">
        <div>
          <Navbar />
        </div>

        <div className="h-[80%]  grid grid-cols-[20%,80%]">
          <div className="grid place-items-center">
            <p>00</p>
          </div>
          <ul className="grid place-items-center">
            <div className="flex flex-col gap-4">{list}</div>
          </ul>
        </div>
      </Container>
    </aside>
  );
};

export default Sidebar;
