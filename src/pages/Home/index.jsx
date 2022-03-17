import ModalLogin from "../../components/ModalLogin";
import ButaodeTeste from "../../components/ButaodeTeste";
import Header from "../../components/Header";
import { useState } from "react";

const Home = () => {
  const [modalLoginUp, setModalLoginUp] = useState(false);

  const openModalLogin = () => {
    setModalLoginUp((prevCheck) => !prevCheck);
  };

  return (
    <div>
      {/* <ButaodeTeste onClick={openModalLogin} /> */}
      <Header />
      {modalLoginUp && <ModalLogin setModalLoginUp={setModalLoginUp} />}
    </div>
  );
};

export default Home;
