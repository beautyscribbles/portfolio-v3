type Section = { id: number; name: string; link: string };

const Sidebar = () => {
  const sections: Section[] = [
    { id: 0, name: "about", link: "about" },
    { id: 1, name: "projects", link: "projects" },
    { id: 2, name: "skills", link: "skils" },
    { id: 3, name: "contact", link: "contact" },
  ];

  const list = sections.map((section) => {
    return (
      <li key={section.id} className="text-2xl">
        <a href="#">{section.name}</a>
      </li>
    );
  });

  return (
    <div className="bg-orange-300 h-full  ">
      <div></div>

      <aside className="h-full grid place-items-center">
        <ul>{list}</ul>
      </aside>
    </div>
  );
};

export default Sidebar;
