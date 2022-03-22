import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Modal } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalReview = ({ setShowModalReview, setShowModalInfo }) => {
  const {} = useService();

  const schema = yup.object().shape({
    description: yup.string(),
  });

  const success = () => {
    toast.success("Requisição de serviço feita com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postReview = ({ description }) => {
    const data = {
      score: 5,
      description,
    };
    console.log(data);
    //chamada da review(data, success, error);
  };

  return (
    <ContainerModal>
      <Modal>
        <button
          onClick={() => {
            setShowModalInfo(true);
            setShowModalReview(false);
          }}
        >
          Voltar
        </button>
        <form onSubmit={handleSubmit(postReview)}>
          <div>
            <label>Comentário:</label>
            <textarea
              {...register("description")}
              rows="5"
              cols="33"
              maxLength="200"
              placeholder="Escreva um comentário sobre o biqueiro"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </Modal>
    </ContainerModal>
  );
};

export default ModalReview;