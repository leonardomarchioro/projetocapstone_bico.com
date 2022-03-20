import { Container } from "./styles";
import Input from "../Input";

import { useForm } from "react-hook-form";

const SectionAddServices = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Container>
      <form>
        <h2>Solicitacao de Servico</h2>
        <Input
          type="select"
          name="category"
          label="Categoria"
          register={register}
        >
          <option value="" selected disabled hidden>
            Outros
          </option>
          <option value="Jardinagem">Jardinagem</option>
          <option value="Limpeza">Limpeza</option>
          <option value="Reforma">Reforma</option>
          <option value="Pintura">Pintura</option>
          <option value="Mecanica">Mecanica</option>
        </Input>

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>

      <div>
        <h2>Meus Servicos Solicitados</h2>
        <ul></ul>
      </div>
    </Container>
  );
};

export default SectionAddServices;
