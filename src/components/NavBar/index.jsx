import { Link } from "react-router-dom";
import { Container } from "./styles";

const NavBar = ({ open }) => {
  return (
    <Container open={open}>
      <ul>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/suplier">Servicos</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>Login</li>
        <li>
          <Link to="/register">Registrar-se</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
