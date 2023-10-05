import { satoshiBlack, satoshiBold } from "@/components/utils/font";

const bold = satoshiBold.className;
const black = satoshiBlack.className;
interface Props {
  text: string;
}

const Heading = (props: Props) => {
  const { text } = props;

  return (
    <h1 className={`${bold} text-4xl relative`}>
      <span className={`${black} stroked text-7xl absolute -top-8 -z-10`}>
        {text}
      </span>
      {text}
    </h1>
  );
};

export default Heading;
