import { Link } from "react-router-dom";
import {
  NavContainer,
  ContainerUpLink,
  ContainerDownLink,
  Div,
} from "./styles";
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
      </motion.ul>
    </NavContainer>
  );
};

export default NavBar;
