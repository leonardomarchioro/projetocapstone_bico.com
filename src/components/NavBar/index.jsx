import { Link } from "react-router-dom";
import {
  NavContainer,
  ContainerUpLink,
  ContainerDownLink,
  Div,
} from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

const NavBar = ({ open, wrapperFunc, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open} wrapperFunc={wrapperFunc}>
      <ul>
        <ContainerDownLink>
          <div>
            <Link to="/about"> Sobre</Link>

            <Link to="/contact"> Contato</Link>
          </div>
        </ContainerDownLink>
        <ContainerUpLink>
          <div>
            <Div>
              <div onClick={wrapperFunc}> Login</div>
            </Div>
            <Link to="/register"> Registrar-se</Link>
          </div>
        </ContainerUpLink>
      </ul>
    </NavContainer>
  );
};

export default NavBar;
