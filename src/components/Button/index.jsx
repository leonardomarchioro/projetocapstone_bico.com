import { Btn, Sec } from "./style";

const Button = ({ text, ...rest }) => {
  return (
    <Sec>
      <Btn {...rest}>{text}</Btn>
    </Sec>
  );
};
export default Button;
