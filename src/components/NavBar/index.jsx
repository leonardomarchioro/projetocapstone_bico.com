import { Link } from "react-router-dom";
import { NavContainer, ContainerUpLink, ContainerDownLink } from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

const NavBar = ({ open, openModalLogin, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open}>
      <ul>
        <ContainerDownLink>
          <div>
            <Link to="/about">Sobre</Link>

            <Link to="/contact">Contato</Link>
          </div>
        </ContainerDownLink>
        <ContainerUpLink>
          <div>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
            {/* <ButtonLogin onClick={openModalLogin}>Login</ButtonLogin> */}
            <button onClick={openModalLogin}>Login</button>

            <Link to="/register">Registrar-se</Link>
          </div>
        </ContainerUpLink>
      </ul>
    </NavContainer>
  );
};

export default NavBar;
