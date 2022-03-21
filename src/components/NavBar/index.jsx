import { Link } from "react-router-dom";
import { NavContainer, ContainerUpLink, ContainerDownLink } from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";
import { motion } from "framer-motion";

const NavBar = ({ open, wrapperFunc, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open} wrapperFunc={wrapperFunc}>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
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
      </motion.ul>
    </NavContainer>
  );
};

export default NavBar;
