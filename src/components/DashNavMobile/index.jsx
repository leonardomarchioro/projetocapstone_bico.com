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
        <button onClick={console.log()}>
          <FiUser size={20} />
        </button>
        <button onClick={console.log()}>
          <FiClipboard size={20} />
        </button>
      </div>
      <button onClick={() => handleLogout(history)}>
        <FiLogIn size={20} />
      </button>
    </Container>
  );
};

export default DashNavMobile;
