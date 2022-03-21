import { Container, Content } from "./styles";
import logo from "../../img/logo.png";
import ModalLogin from "../../components/ModalLogin";
import ButaodeTeste from "../../components/ButtonLogin";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import ButtonLogin from "../../components/ButtonLogin";

const Home = () => {
  const [modalLoginUp, setModalLoginUp] = useState(false);

  const openModalLogin = () => {
    //FUNÇAO PARA ABRIR MODAL DE LOGIN, IMPLEMENTAR PROVIDER
    setModalLoginUp((prevCheck) => !prevCheck);
  };

  return (
    <Container>
      <div>
        <Header openModalLogin={openModalLogin} />
        {modalLoginUp && <ModalLogin openModalLogin={openModalLogin} />}
        <Content modalLoginUp={modalLoginUp}>
          <section className="containerMobile">
            <h3>CHEGA MAIS!</h3>
            <h2>Contrate serviços ou ofereça seus trabalhos</h2>
            <p>TRABALHE FAZENDO BICOS OU CONTRATE-OS</p>
            <figure>
              <img src={logo} alt="logo" />
            </figure>
            <span>
              Receba diariamente anúncios de bicos , ganhe desconto a cada
              avaliação de serviço prestado e muito mais!
            </span>
          </section>

          <section className="containerDesktop">
            <figure>
              <img src={logo} alt="logo" />
              <figcaption>O faz-tudo de confiança</figcaption>
            </figure>
          </section>
        </Content>
      </div>
    </Container>
  );
};
export default Home;
