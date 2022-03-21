import { Container, Content } from "./styles";
import Logo from "../../components/Logo/";
import people from "../../assets/people.png";
import { FiCornerDownLeft } from "react-icons/fi";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const history = useHistory();

  return (
    <motion.section
      initial={{ translateY: 1000, opacity: 0 }}
      animate={{ translateY: 0, opacity: 2 }}
      exit={{ translateY: 100, opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Container>
        <div>
          <Logo />
          <Button
            text={<FiCornerDownLeft size={30} />}
            onClick={() => history.push("/")}
          />
        </div>
        <Content>
          <section className="containerMobile">
            <h3>Sobre nós!</h3>
            <p>
              Nosso objetivo é conectar pessoas que buscam uma renda extra, com
              pessoas que buscam resolver problemas cotidianos, tudo isso de
              forma prática e cheia de vantagens!
            </p>
          </section>
          <section className="containerDesktop">
            <figure>
              <img src={people} alt="people" />
            </figure>
          </section>
        </Content>
      </Container>
    </motion.section>
  );
};

export default About;
