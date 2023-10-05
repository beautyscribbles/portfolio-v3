import { satoshiBold } from "@/components/utils/font";

const Navbar = () => {
  return (
    <nav className=" h-[10vh] flex items-center">
      <p className={`${satoshiBold.className} text-2xl tracking-[4px]`}>
        &#x2f;&#x2f;m
      </p>
    </nav>
  );
};

export default Navbar;
