import { ContainerService, Div, ContainerInfos } from "./styles.js";
import Button from "../Button";
import ModalGetService from "../ModalGetService";
import { useState } from "react";

const ContainerInfo = ({ service }) => {
  const [getService, setgetService] = useState(false);

  return (
    <>
      {getService && (
        <ModalGetService
          key={service.id}
          setGetService={setgetService}
          dataId={service.id}
        />
      )}
      <ContainerService>
        <ContainerInfos>
          <div>
            <h3>{service.name}</h3>
            <span>Categoria: {service.category}</span>
          </div>
          <Button
            id={service.id}
            onClick={() => setgetService(true)}
            text={"Candidatar-se"}
          />
        </ContainerInfos>
        <Div>{service.description}</Div>
        <span>{service.dateActual}</span>
      </ContainerService>
    </>
  );
};

export default ContainerInfo;
