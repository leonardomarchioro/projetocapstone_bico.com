import { Container, Content } from "./styles";
import logo from "../../img/logo.png";

const Home = () => {
  return (
    <Container>
      <Content>
        <section className="containerMobile">
          <h3>CHEGA MAIS!</h3>
          <h2>Contrate serviços ou ofereça seus trabalhos</h2>
          <p>TRABALHE FAZENDO BICOS OU CONTRATE-OS</p>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <span>
            Receba diariamente anúncios de bicos , ganhe desconto a cada
            avaliação de serviço prestado e muito mais!{" "}
          </span>
        </section>

        <section className="containerDesktop">
          <figure>
            <img src={logo} alt="logo" />
            <figcaption>O faz-tudo de confiança</figcaption>
          </figure>
        </section>
      </Content>
    </Container>
  );
};
export default Home;
