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
    //FUNÇAO PARA ABRIR MODAL DE LOGIN, IMPLEMENTAR PROVIDER
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
        <Content>
          <section className="containerMobile">
            <h3>CHEGA MAIS!</h3>
            <h2>Contrate serviços ou ofereça seus trabalhos</h2>
            <p>TRABALHE FAZENDO BICOS OU CONTRATE-OS</p>
            <figure>
              <img src={HomeImg} alt="logo" />
            </figure>
            <span>
              Receba diariamente anúncios de bicos , ganhe desconto a cada
              avaliação de serviço prestado e muito mais!{" "}
            </span>
          </section>

          <section className="containerDesktop">
            <figure>
              <img src={HomeImg} alt="logo" />
              <figcaption>O faz-tudo de confiança</figcaption>
            </figure>
          </section>
        </Content>
      </Container>
    </motion.section>
  );
};
export default Home;
