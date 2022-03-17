import { Container } from "./styles";

const BurguerMenu = ({ handleOpenNav, open }) => {
  return (
    <Container onClick={handleOpenNav} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
