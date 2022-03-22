import { Container, Content } from "./styles";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";
import ModalAvatars from "../ModalAvatars";

import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";

import Avatar from "react-nice-avatar";

const AsideProfile = ({ handlePage, profile, setNewSupplier }) => {
  const { userLogin, supplier } = useUser();
  const [page, setPage] = useState("Biqueiro");
  const [showModalAvatars, setShowModalAvatars] = useState(false);
  console.log(showModalAvatars);
  return (
    <>
      <ModalAvatars
        isOpen={showModalAvatars}
        onClose={() => setShowModalAvatars(false)}
      />
      <Container profile={profile}>
        <Content>
          <div>
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
            <Button onClick={() => setNewSupplier(true)} text="Seja Membro" />
          )}
        </Content>
      </Container>
    </>
  );
};

export default AsideProfile;
