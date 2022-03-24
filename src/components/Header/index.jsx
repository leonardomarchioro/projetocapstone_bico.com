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
    style === "cont" ? setStyle("cont2") : setStyle("cont");
  };

  const wrapperFunc = () => {
    openModalLogin(openModalLogin);
    handleOpenNav();
    changeStyle();
  };

  const wrapperFunction = () => {
    handleOpenNav();
    changeStyle();
  };

  return (
    <Container>
      <section className={style}>
        <Logo />
        <BurguerMenu
          wrapperFunction={wrapperFunction}
          open={open}
          wrapperFunc={wrapperFunc}
        />
      </section>
      <NavBar open={open} wrapperFunc={wrapperFunc} />
    </Container>
  );
};

export default Header;
