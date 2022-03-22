import Button from "../components/Button";
import { useService } from "../providers/Services";
import ModalInfoMyService from "../components/ModalInfoMyService";
import { useState } from "react";
import { Li } from "./styles";

const MyServicesComponent = ({ service }) => {
  const { deleteService, attServiceReview } = useService();
  const [showModalInfo, setShowModalInfo] = useState(false);
  console.log(service.supplier);
  return (
    <>
      {showModalInfo && (
        <ModalInfoMyService
          service={service}
          setShowModalInfo={setShowModalInfo}
        />
      )}
      {service.supplier.length > 0 ? (
        <Li
          className="Candidato"
          key={service.id}
          id={service.id}
          onClick={() => setShowModalInfo(true)}
          available={true}
        >
          <h2>{service.category}</h2>
          <div className="supplier">
            <span>Candidato para o serviço</span>
            <span>{service.dateActual}</span>
          </div>
        </Li>
      ) : (
        <Li key={service.id} id={service.id}>
          <h2>{service.category}</h2>
          <span>{service.dateActual}</span>
        </Li>
      )}
    </>
  );
};

export default MyServicesComponent;
