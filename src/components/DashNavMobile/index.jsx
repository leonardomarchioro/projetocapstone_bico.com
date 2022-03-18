import { Container } from "./styles";
import { FiClipboard, FiUser, FiLogIn } from "react-icons/fi";

const DashNavMobile = () => {
  return (
    <Container>
      <div>
        <span>
          <FiUser />
        </span>
        <span>
          <FiClipboard />
        </span>
      </div>
      <span>
        <FiLogIn />
      </span>
    </Container>
  );
};

export default DashNavMobile;
