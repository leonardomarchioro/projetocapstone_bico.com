import { Container, Content } from "./styles";
import logo from "../../img/logo.jpg";
import ModalLogin from "../../components/ModalLogin";
import ButaodeTeste from "../../components/ButtonLogin";
import Header from "../../components/Header";
import { useState } from "react";
import ButtonLogin from "../../components/ButtonLogin";
import HomeImg from "../../assets/homeimg.svg";

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
  );
};
export default Home;
