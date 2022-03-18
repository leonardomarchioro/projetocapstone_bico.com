import { Container, Content } from "./styles";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import cellphone from "../../img/cellphone.png";

const Contact = () => {
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
      role: "Teach Leader",
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

  return (
    <Container>
      <Content>
        <section className="containerMobile">
          <h2>Contatos</h2>
          <div className="principaisContatos">
            <ul>
              {linkedinUsers.map((user, index) => {
                return (
                  <li key={index}>
                    <h3>
                      {user.name}{" "}
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
        </section>
        <section className="containerDesktop">
          <figure>
            <img scr={cellphone} alt="cellphone" />
          </figure>
        </section>
      </Content>
    </Container>
  );
};
export default Contact;
