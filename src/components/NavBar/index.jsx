import { Link } from "react-router-dom";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/suplier">Servicos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>Loguin</li>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
