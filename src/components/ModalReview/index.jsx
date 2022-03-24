import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Modal } from "./style";
import StarRating from "../StarRating";
import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalReview = ({ setShowModalReview, setShowModalInfo, service }) => {
  const { getServiceTakenSupplier } = useService();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const schema = yup.object().shape({
    description: yup.string(),
  });

  const success = () => {
    toast.success("Serviço concluído com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const postReview = ({ description }) => {
    const data = {
      score: rating + 1,
      description,
    };
    getServiceTakenSupplier(
      service.category,
      service.id,
      data,
      service.supplier[0].id,
      success,
      error
    );
  };

  return (
    <ContainerModal>
      <Modal>
        <div className="Header">
          <h1>Avaliação de serviço</h1>
          <TiArrowBack
            size={30}
            onClick={() => {
              setShowModalInfo(true);
              setShowModalReview(false);
            }}
          />
        </div>

        <form onSubmit={handleSubmit(postReview)}>
          <StarRating
            setRating={setRating}
            rating={rating}
            hover={hover}
            setHover={setHover}
          />
          <div className="containerTextarea">
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
