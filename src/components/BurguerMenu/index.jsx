import { Container } from "./styles";
import { useState } from "react";

const BurguerMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleOpenBurguer = () => {
    setOpen(!open);
  };

  return (
    <Container onClick={handleOpenBurguer} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
