import React from "react";
import { IconType } from "react-icons";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaFigma, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiExpress,
  SiNextdotjs,
  SiNpm,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";

type Technology = {
  icon: React.ReactElement<IconType>;
  name: string;
};

const reg = 25;
const sml = 20;

export const technologies: Technology[] = [
  { icon: <BiLogoTypescript size={reg} />, name: "TypeScript" },
  { icon: <BiLogoJavascript size={reg} />, name: "JavaScript" },
  { icon: <AiFillHtml5 size={reg} />, name: "HTML" },
  { icon: <IoLogoCss3 size={reg} />, name: "CSS" },
  { icon: <FaSass size={reg} />, name: "Sass" },
  { icon: <BiLogoReact size={reg} />, name: "React" },
  { icon: <BiLogoRedux size={reg} />, name: "Redux" },
  { icon: <BiLogoNodejs size={reg} />, name: "Node.js" },
  { icon: <SiNextdotjs size={sml} />, name: "Next.js" },
  { icon: <SiExpress size={sml} />, name: "Express.js" },
  { icon: <BiLogoMongodb size={reg} />, name: "MongoDB" },
  { icon: <BiLogoFirebase size={reg} />, name: "Firebase" },
  { icon: <SiSupabase size={sml} />, name: "Supabase" },
  { icon: <SiNpm size={sml} />, name: "npm" },
  { icon: <FaFigma size={sml} />, name: "Figma" },
  { icon: <AiFillGithub size={reg} />, name: "GitHub" },
  { icon: <BiLogoTailwindCss size={reg} />, name: "Tailwind CSS" },
  { icon: <BiLogoGraphql size={reg} />, name: "GraphQL" },
  { icon: <SiStyledcomponents size={reg} />, name: "Styled Com." },
];
