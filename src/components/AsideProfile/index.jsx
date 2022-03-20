import { Container } from "./styles";
import { useUser } from "../../providers/User";
import { useState } from "react";
import Button from "../Button";

const AsideProfile = ({ handlePage }) => {
  const { addSupplier, userLogin, supplier } = useUser();
  const [page, setPage] = useState("Biqueiro");

  console.log(userLogin);
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
        <Button onClick={addSupplier} text="Seja Membro" />
      )}
    </Container>
  );
};

export default AsideProfile;
