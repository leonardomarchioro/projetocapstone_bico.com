import { Container } from "./styles";
import { FiClipboard, FiUser, FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";

const DashNavMobile = ({ handleService, handleProfile }) => {
  const history = useHistory();

  const { handleLogout } = useUser();

  return (
    <Container>
      <div>
        <button onClick={handleProfile}>
          <FiUser size={20} />
        </button>
        <button onClick={handleService}>
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
