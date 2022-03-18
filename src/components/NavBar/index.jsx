import { Link } from "react-router-dom";
import { NavContainer, ContainerUpLink, ContainerDownLink } from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

const NavBar = ({ open, openModalLogin, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open}>
      <ul>
        <ContainerUpLink>
          <div>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
            {/* <ButtonLogin onClick={openModalLogin}>Login</ButtonLogin> */}
            <button onClick={openModalLogin}>Login</button>
            <li>
              <Link to="/register">Registrar-se</Link>
            </li>
          </div>
        </ContainerUpLink>
        <ContainerDownLink>
          <div>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </div>
        </ContainerDownLink>
      </ul>
    </NavContainer>
  );
};

export default NavBar;
