import { Container } from "./styles";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";

const AsideProfile = ({ handlePage }) => {
  const { addSupplier, userLogin, supplier } = useUser();
  const [page, setPage] = useState("Biqueiro");

  const success = () => {
    toast.success("Biqueiro cadastrado com sucesso!");
  };
  const error = (errorMsg) => {
    console.log(errorMsg);
    toast.error("Falha no cadastro, tente novamente mais tarde");
  };

  return (
    <Container>
      <img
        src="https://thenexus.one/storage/2022/03/Featured-Image-Luffy-hat.jpg"
        alt="Luffysan"
      />
      <span>{userLogin.name}</span>
      {supplier ? (
        <div>
          <div>Página de biqueiro</div>
          <Button
            onClick={() => {
              handlePage();
              page === "Biqueiro" ? setPage("Cliente") : setPage("Biqueiro");
            }}
            text={`Página de ${page}`}
          />
        </div>
      ) : (
        <Button
          onClick={() => addSupplier(success, error)}
          text="Seja Membro"
        />
      )}
    </Container>
  );
};

export default AsideProfile;
