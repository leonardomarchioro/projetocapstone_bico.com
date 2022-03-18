import ModalLogin from "../../components/ModalLogin";
import ButaodeTeste from "../../components/ButtonLogin";
import Header from "../../components/Header";
import { useState } from "react";
import ButtonLogin from "../../components/ButtonLogin";

const Home = () => {
  const [modalLoginUp, setModalLoginUp] = useState(false);

  const openModalLogin = () => {
    //FUNÇAO PARA ABRIR MODAL DE LOGIN, IMPLEMENTAR PROVIDER
    setModalLoginUp((prevCheck) => !prevCheck);
  };

  return (
    <div>
      <Header openModalLogin={openModalLogin} />
      {modalLoginUp && <ModalLogin openModalLogin={openModalLogin} />}
    </div>
  );
};

export default Home;
