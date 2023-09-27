import Container from "@/components/ui/Container";
import { satoshiBlack, satoshiMedium } from "@/components/utils/font";

const Overview = () => {
  const title = `<frontend developer />`;
  const medium = satoshiMedium.className;
  const black = satoshiBlack.className;

  return (
    <section className="h-screen relative">
      <Container className="center">
        <article className="flex flex-col gap-2 max-w-[600px] md:gap-1">
          <h1 className={`${black} font-bold text-5xl`}>
            Hi, I&rsquo;m Monique.
          </h1>
          <p
            className={`${medium} tracking-wide text-[1.2rem] text-secondary md:text-2xl`}
          >
            {title}
          </p>
          <p className="text-[0.875rem] leading-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            itaque suscipit perspiciatis doloremque ea nulla tempore atque
            necessitatibus quam molestias!
          </p>
        </article>
      </Container>
    </section>
  );
};

export default Overview;
