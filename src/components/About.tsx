import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { satoshiBold, satoshiMedium } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section id={0} className="flex flex-col gap-8">
      <Heading text="about" />
      <article>
        <Fragment>
          <h3 className={`${satoshiBold.className} text-2xl`}>
            Monique McIntyre
          </h3>
          <p className={satoshiMedium.className}>Frontend Developer</p>
        </Fragment>
        <br></br>
        <Fragment>
          <p className={`opacity-50 text-sm`}>&#60;article&#62;</p>
          <p className="pl-4">
            Ut integer phasellus in vel at in ultricies. <br></br> Non semper
            sed fermentum nunc tellus vitae porta ipsum fermentum. <br></br>{" "}
            <br></br>
            Convallis tellus aliquet morbi morbi leo quis tincidunt et commodo.
            Non consequat fusce sit molestie nec dis. At enim lacus scelerisque
            integer ac cursus consequat.
          </p>
          <p className={`opacity-50 text-sm`}>&#60;&#47;article&#62;</p>
        </Fragment>
      </article>
    </Section>
  );
};

export default About;