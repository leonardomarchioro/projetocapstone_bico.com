import { Botao } from "./styles";

const ButaodeTeste = ({ text, ...rest }) => {
  return (
    <div>
      <Botao {...rest}>{text}</Botao>
    </div>
  );
};
export default ButaodeTeste;
