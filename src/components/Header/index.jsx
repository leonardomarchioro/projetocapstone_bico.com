import { Container } from "./styles";
import { useState } from "react";

import BurguerMenu from "../BurguerMenu";
import Logo from "../Logo";
import NavBar from "../NavBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <section>
        <Logo />
        <BurguerMenu handleOpenNav={handleOpenNav} open={open} />
      </section>
      {open && <NavBar />}
    </Container>
  );
};

export default Header;
