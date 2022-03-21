import { Container } from "./styles";

const ModalConfirmation = () => {
  return (
    <Container>
      <div>
        <h2>Tem certeza que quer se tornar membro ?</h2>
        <button>Sim</button>
        <button>Nao</button>
      </div>
    </Container>
  );
};

export default ModalConfirmation;
