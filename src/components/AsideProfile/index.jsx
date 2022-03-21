import { Container, Content } from "./styles";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";
import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";

const AsideProfile = ({ handlePage, profile }) => {
  const { addSupplier, userLogin, supplier } = useUser();
  const [page, setPage] = useState("Biqueiro");

  const success = () => {
    toast.success("Biqueiro cadastrado com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  return (
    <Container profile={profile}>
      <Content>
        <div>
          <figure>
            <img
              src="https://thenexus.one/storage/2022/03/Featured-Image-Luffy-hat.jpg"
              alt="Luffysan"
            />
          </figure>

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
            onClick={() => addSupplier(success, error)}
            text="Seja Membro"
          />
        )}
      </Content>
    </Container>
  );
};

export default AsideProfile;
