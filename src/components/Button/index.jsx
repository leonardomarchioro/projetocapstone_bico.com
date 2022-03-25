import { Btn, Sec } from "./style";

const Button = ({ text, subtitle, ...rest }) => {
  return (
    <Sec>
      <Btn {...rest}>{text}</Btn>
      {subtitle && <span>{subtitle}</span>}
    </Sec>
  );
};
export default Button;
