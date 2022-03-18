import { Container } from "./styles";
import { useState } from "react";

import BurguerMenu from "../BurguerMenu";
import Logo from "../Logo";
import NavBar from "../NavBar";

const Header = ({ openModalLogin }) => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("cont");

  const handleOpenNav = () => {
    setOpen(!open);
  };

  const changeStyle = () => {
    const newColor = style === "cont" ? setStyle("cont2") : setStyle("cont");
  };

  const wrapperFunction = () => {
    handleOpenNav();
    changeStyle();
  };

  return (
    <Container>
      <section className={style}>
        <Logo />
        <BurguerMenu wrapperFunction={wrapperFunction} open={open} />
      </section>
      <NavBar open={open} openModalLogin={openModalLogin} />
    </Container>
  );
};

export default Header;
