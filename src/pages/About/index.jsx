import { Container, Content } from "./styles";
import Logo from "../../components/Logo/";
import people from "../../assets/people.png";
import { FiCornerDownLeft } from "react-icons/fi";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <Logo />
        <div>
          <Button
            text={<FiCornerDownLeft size={30} />}
            onClick={() => history.push("/")}
          />
        </div>
      </div>
      <Content>
        <section className="containerMobile">
          <h3>Sobre nós!</h3>
          <p>
            Nosso objetivo é conectar pessoas que buscam uma renda extra, com
            pessoas que buscam resolver problemas cotidianos, tudo isso de forma
            prática e cheia de vantagens!
          </p>
        </section>
        <section className="containerDesktop">
          <figure>
            <img src={people} alt="people" />
          </figure>
        </section>
      </Content>
    </Container>
  );
};

export default About;
