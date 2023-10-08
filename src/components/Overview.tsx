import Section from "@/components/Section";
import { satoshiBlack, satoshiMedium } from "@/components/utils/font";

const Overview = () => {
  const title = `<frontend developer />`;
  const medium = satoshiMedium.className;
  const black = satoshiBlack.className;

  return (
    <Section className="h-screen relative" sectionName="intro">
      <article className="flex flex-col gap-2 md:gap-3">
        <h1 className={`${black} font-bold text-clamp leading-[1.1]`}>
          Hi, I&rsquo;m Monique.
        </h1>
        <p
          className={`${medium} tracking-wide text-[1.2rem] text-secondary md:text-2xl`}
        >
          {title}
        </p>
        <p className="paragraph leading-6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          itaque suscipit perspiciatis doloremque ea nulla tempore atque
          necessitatibus quam molestias! Consectetur, adipisicing elit.
        </p>
      </article>
    </Section>
  );
};

export default Overview;
