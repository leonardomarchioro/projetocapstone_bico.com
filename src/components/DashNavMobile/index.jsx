import { Container } from "./styles";
import { FiClipboard, FiUser, FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";

const DashNavMobile = () => {
  const history = useHistory();

  const { handleLogout } = useUser();

  return (
    <Container>
      <div>
        <button onClick={console.log("perfil")}>
          <FiUser />
        </button>
        <button onClick={console.log("modal solicitar serviço")}>
          <FiClipboard />
        </button>
      </div>
      <button onClick={() => handleLogout(history)}>
        <FiLogIn />
      </button>
    </Container>
  );
};

export default DashNavMobile;
