import { Container, Content } from "./styles";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";
import ModalAvatars from "../ModalAvatars";

import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { FiUserPlus, FiLogIn } from "react-icons/fi";

import Avatar from "react-nice-avatar";

const AsideProfile = ({ handlePage, profile, setNewSupplier }) => {
  const { userLogin, supplier, handleLogout } = useUser();
  const [page, setPage] = useState("Biqueiro");
  const [showModalAvatars, setShowModalAvatars] = useState(false);

  return (
    <>
      <Container profile={profile}>
        <ModalAvatars
          isOpen={showModalAvatars}
          onClose={() => setShowModalAvatars(false)}
        />
        <Content>
          <div className="avatarContainer">
            <div
              className="avatar-container"
              onClick={() => setShowModalAvatars(true)}
            >
              <Avatar
                style={{ width: "4rem", height: "4rem" }}
                {...userLogin.avatar?.avatarConfig}
              />
            </div>

            <span>{userLogin.name}</span>
          </div>

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
          <button
            onClick={() => handleLogout()}
            className="buttonDesktopLogout"
          >
            <FiLogIn size={30} />
          </button>
        </Content>
      </Container>
    </>
  );
};

export default AsideProfile;
