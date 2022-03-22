import Button from "../Button";
import { useService } from "../../providers/Services";
import ModalInfoMyService from "../ModalInfoMyService";
import { useState } from "react";
import { Li } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import ModalReview from "../ModalReview";

const MyServicesComponent = ({ service }) => {
  const { deleteService } = useService();
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalReview, setShowModalReview] = useState(false);

  const success = () => {
    toast.success("Requisição deletada com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  return (
    <>
      {showModalInfo && (
        <ModalInfoMyService
          service={service}
          setShowModalInfo={setShowModalInfo}
          setShowModalReview={setShowModalReview}
        />
      )}
      {showModalReview && (
        <ModalReview
          setShowModalReview={setShowModalReview}
          setShowModalInfo={setShowModalInfo}
          service={service}
        />
      )}
      {service.supplier.length > 0 ? (
        <Li
          key={service.id}
          id={service.id}
          onClick={() => setShowModalInfo(true)}
          available={true}
        >
          <h2>{service.category}</h2>
          <div className="Supplier">
            <span>Candidato para o serviço</span>
            <span>{service.dateActual}</span>
          </div>
        </Li>
      ) : (
        <Li key={service.id} id={service.id}>
          <h2>{service.category}</h2>
          <div className="Client">
            <span>{service.dateActual}</span>
            <FaTrashAlt
              onClick={() => deleteService(service.id, success, error)}
            />
          </div>
        </Li>
      )}
    </>
  );
};

export default MyServicesComponent;
