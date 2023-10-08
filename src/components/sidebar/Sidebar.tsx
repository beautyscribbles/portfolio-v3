import Navbar from "@/components/Navbar";
import PageNumber from "@/components/sidebar/PageNumber";
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
        <a href="#" className="grid grid-cols-[1fr,2fr] gap-2 w-32">
          <p className="grid place-self-center">{section.id}.</p>
          <p>#&nbsp;{section.name}</p>
        </a>
      </li>
    );
  });

  return (
    <aside className="h-full">
      <Container className="h-full">
        <Navbar />

        <div className="h-[80%] grid grid-cols-[20%,80%] ">
          <PageNumber />
          <ul className="grid place-items-center">
            <div className="flex flex-col gap-5">{list}</div>
          </ul>
        </div>
      </Container>
    </aside>
  );
};

export default Sidebar;
