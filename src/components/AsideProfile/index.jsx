import { Container, Content } from "./styles";
import { useUser } from "../../providers/User";
import { useService } from "../../providers/Services";
import { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import ModalAvatars from "../ModalAvatars";

import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { FiUserPlus, FiLogIn } from "react-icons/fi";

import Avatar from "react-nice-avatar";
import AverageReview from "../AverageReview";

const AsideProfile = ({ handlePage, profile, setNewSupplier }) => {
  const { userLogin, supplier, handleLogout } = useUser();
  const { UpdateAverage } = useService();
  const [page, setPage] = useState("Biqueiro");
  const [showModalAvatars, setShowModalAvatars] = useState(false);
  const [avarage, setAvarage] = useState(0);
  const getAvarage = useCallback(async () => {
    if (supplier) {
      const avarageUpdated = await UpdateAverage(supplier[0].id);
      setAvarage(avarageUpdated);
    }
  }, [UpdateAverage, supplier]);
  useEffect(() => {
    getAvarage();
  }, [getAvarage]);
  console.log(page);
  return (
    <>
      <Container profile={{ profile }}>
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
            {supplier && <AverageReview avarage={avarage} />}
            <span>{userLogin.name}</span>
          </div>

          {supplier ? (
            <Button
              subtitle={
                page === "Biqueiro" ? "Página de anúncios" : "Página principal"
              }
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
              subtitle="Torne-se um biqueiro"
              onClick={() => setNewSupplier(true)}
              text={<FiUserPlus size={20} />}
            />
          )}
          <button
            onClick={() => handleLogout()}
            className="buttonDesktopLogout"
          >
            <FiLogIn size={30} />
            <span className="subtitle">Sair</span>
          </button>
        </Content>
      </Container>
    </>
  );
};

export default AsideProfile;
