import { Container, Content } from "./styles";

const Contact = () => {
  return (
    <Container>
      <Content>
        <section className="containerMobile">
          <h2>Fale Conosco!</h2>
          <h3>CENTRAL DE ATENDIMENTO</h3>
          <div className="principaisContatos">
            <p>0800 999 9999 | Nacional</p>
            <p>WhatsApp (62) 9999-9999</p>
            <p>Segunda à Sexta das 8h as 18h</p>
            <span>(horário de Brasília)</span>
          </div>
          <div className="emailContato">
            <p>email:</p>
            <span>kenzie_bicos@capstone.com</span>
          </div>
        </section>
      </Content>
    </Container>
  );
};
export default Contact;
