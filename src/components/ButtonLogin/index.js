import { BtnLogin } from "./styles";

const ButtonLogin = ({ text, ...rest }) => {
  return (
    <div>
      <BtnLogin {...rest}>Login</BtnLogin>
    </div>
  );
};
export default ButtonLogin;
