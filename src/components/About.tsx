import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiMedium } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section sectionName="about" className="relative">
      <article className=" flex flex-col gap-16">
        <Heading text="about me." />

        <div>
          <Fragment>
            <h3 className={`${satoshiMedium.className} text-xl`}>
              Monique McIntyre
            </h3>
            <p className="text">Front End Developer</p>
          </Fragment>
          <br></br>
          <Fragment>
            <p className={`opacity-20 text-sm`}>&#60;p&#62;</p>
            <p className="paragraph">
              7x binger of Archer 🏆 and 3x binger of Arrested Development. 🏆
              <br></br>
              Professional book re-reader with a weakness for anything mafia related. 📚
            
              <br></br> <br></br>
              Hi, again! I&apos;m Monique. I&apos;m a frontend developer with a passion for blending creativity with functionality. I enjoy building websites that are both beautiful and user-friendly. I believe in simplicity and minimalism and enjoy bringing that ethos into every project I touch. Let&apos;s build something amazing together!
            </p>
            <p className={`opacity-20 text-sm`}>&#60;&#47;p&#62;</p>
          </Fragment>
        </div>
      </article>
    </Section>
  );
};

export default About;
