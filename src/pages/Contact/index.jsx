import { Container, Content } from "./styles";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import cellphone from "../../assets/cellphone.gif";
import Logo from "../../components/Logo";
import { FiCornerDownLeft } from "react-icons/fi";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const history = useHistory();

  const [linkedinUsers] = useState([
    {
      name: "André Passoni",
      role: "Scrum Master",
      link: "https://www.linkedin.com/in/andre-passoni/",
    },
    {
      name: "Estevão Libardi",
      role: "Quality Assurance",
      link: "https://www.linkedin.com/in/estevao-libardi-bb2950194/",
    },
    {
      name: "Gabriel Dourado",
      role: "Quality Assurance",
      link: "https://www.linkedin.com/in/gabriel-rodrigues-dourado-654952198/",
    },
    {
      name: "Leonardo Marchioro",
      role: "Tech Leader",
      link: "https://www.linkedin.com/in/leonardo-marchioro-224a6a226/",
    },
    {
      name: "Luiz Felipe",
      role: "Quality Assurance",
      link: "https://www.linkedin.com/in/luizfelipeop/",
    },
    {
      name: "Marcelo Alves",
      role: "Product Owner",
      link: "https://www.linkedin.com/in/marcelo-asf/",
    },
  ]);

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Container>
      <div className="header">
        <Logo />
        <div>
          <Button
            text={<FiCornerDownLeft size={30} />}
            onClick={() => history.push("/")}
          />
        </div>
      </div>

      <Content>
        <motion.section
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="containerMobile"
        >
          <h2>Contatos</h2>
          <div className="principaisContatos">
            <ul>
              {linkedinUsers.map((user, index) => {
                return (
                  <li key={index}>
                    <h3>
                      {user.name}
                      <span onClick={() => openInNewTab(user.link)}>
                        <FaLinkedin size={20} />
                      </span>
                    </h3>
                    <i>{user.role}</i>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.section>
        <section className="containerDesktop">
          <figure>
            <img src={cellphone} alt="cellphone" />
          </figure>
        </section>
      </Content>
    </Container>
  );
};
export default Contact;
