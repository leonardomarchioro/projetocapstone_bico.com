import { Container } from "./styles";
import { FiClipboard, FiUser, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";

import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";

const DashNavMobile = ({
  handleService,
  handleProfile,
  handlePage,
  setNewSupplier,
}) => {
  const history = useHistory();
  const { userLogin, supplier, handleLogout } = useUser();

  const [page, setPage] = useState("Biqueiro");

  return (
    <Container>
      <div>
        <button onClick={handleProfile}>
          <FiUser size={20} />
        </button>
        <button onClick={handleService}>
          <FiClipboard size={20} />
        </button>
        {supplier ? (
          <Button
            onClick={() => {
              handlePage();
              page === "Biqueiro" ? setPage("Cliente") : setPage("Biqueiro");
            }}
            text={
              page === "Biqueiro" ? (
                <FaPeopleArrows size={20} />
              ) : (
                <MdHomeRepairService size={20} />
              )
            }
          />
        ) : (
          <Button
            onClick={() => setNewSupplier(true)}
            text={<FiUserPlus size={20} />}
          />
        )}
      </div>
      <button onClick={() => handleLogout(history)}>
        <FiLogIn size={20} />
      </button>
    </Container>
  );
};

export default DashNavMobile;
