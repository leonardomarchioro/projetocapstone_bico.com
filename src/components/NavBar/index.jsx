import { Link } from "react-router-dom";
import { NavContainer, ContainerUpLink, ContainerDownLink } from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

const NavBar = ({ open, wrapperFunc, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open} wrapperFunc={wrapperFunc}>
      <ul>
        <ContainerDownLink>
          <div>
            <Link to="/about">Sobre</Link>

            <Link to="/contact">Contato</Link>
          </div>
        </ContainerDownLink>
        <ContainerUpLink>
          <div>
            <button onClick={wrapperFunc}>Login</button>

            <Link to="/register">Registrar-se</Link>
          </div>
        </ContainerUpLink>
      </ul>
    </NavContainer>
  );
};

export default NavBar;
