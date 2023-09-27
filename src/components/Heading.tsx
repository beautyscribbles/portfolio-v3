import { satoshiBlack } from "@/components/utils/font";

interface Props {
  text: string;
}

const Heading = (props: Props) => {
  const { text } = props;
  const black = satoshiBlack.className;
  return (
    <h1 className={`${black} text-4xl relative`}>
      <span className="stroked text-7xl absolute -top-8 -z-10 ">{text}</span>
      {text}
    </h1>
  );
};

export default Heading;
