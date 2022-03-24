import { Container, Content } from "./styles";
import ModalLogin from "../../components/ModalLogin";
import Header from "../../components/Header";

import { useState } from "react";

import HomeImg from "../../assets/homeimg.svg";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [modalLoginUp, setModalLoginUp] = useState(false);
  const {
    location: { prevPath },
  } = useHistory();
  useEffect(() => {
    if (prevPath === "/register") {
      setModalLoginUp(true);
    }
  }, [prevPath]);

  const openModalLogin = () => {
    setModalLoginUp((prevCheck) => !prevCheck);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div>
          <Header openModalLogin={openModalLogin} />
          {modalLoginUp && <ModalLogin openModalLogin={openModalLogin} />}
        </div>
        <Content modalLoginUp={modalLoginUp}>
          <div className="TextContainer">
            <h3>CHEGA MAIS!</h3>
            <h2>Contrate serviços ou ofereça seus trabalhos</h2>
            <p>TRABALHE FAZENDO BICOS OU CONTRATE-OS</p>
          </div>
          <div className="ImagemContainer">
            <figure>{!modalLoginUp && <img src={HomeImg} alt="logo" />}</figure>
            <span>
              Receba diariamente anúncios de bicos, ganhe desconto a cada
              avaliação de serviço prestado e muito mais!
            </span>
          </div>
        </Content>
      </Container>
    </motion.section>
  );
};
export default Home;
