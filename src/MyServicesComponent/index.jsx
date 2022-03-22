import Button from "../components/Button";
import { useService } from "../providers/Services";
import ModalInfoMyService from "../components/ModalInfoMyService";
import { useState } from "react";

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
        <li
          className="Candidato"
          key={service.id}
          id={service.id}
          onClick={() => setShowModalInfo(true)}
        >
          <h2>{service.category}</h2>
          <span>{service.dateActual}</span>
        </li>
      ) : (
        <li key={service.id} id={service.id}>
          <h2>{service.category}</h2>
          <span>{service.dateActual}</span>
        </li>
      )}
    </>
  );
};

export default MyServicesComponent;
