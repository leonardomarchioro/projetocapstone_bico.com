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
          <div className="informationContainer">
            <h3>{service.name}</h3>
            <span>Categoria: {service.category}</span>
          </div>
        </ContainerInfos>
        <Div>{service.description}</Div>
        <div className="informationButton">
          <Button
            id={service.id}
            onClick={() => setgetService(true)}
            text={"Candidatar-se"}
          />
          <span>{service.dateActual}</span>
        </div>
      </ContainerService>
    </>
  );
};

export default ContainerInfo;
