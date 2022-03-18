import { Container } from "./styles";

const BurguerMenu = ({ wrapperFunction, open }) => {
  return (
    <Container onClick={wrapperFunction} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
