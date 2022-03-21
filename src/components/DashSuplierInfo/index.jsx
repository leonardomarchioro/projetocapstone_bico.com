import { ContainerService, Div, ContainerInfos } from "./styles.js";
import Button from "../Button";
import { useService } from "../../providers/Services/index.js";

const ContainerInfo = ({ service }) => {
  const { attSupplierToService } = useService();

  return (
    <>
      <ContainerService>
        <ContainerInfos>
          <div>
            <h3>{service.name}</h3>
            <span>Categoria: {service.category}</span>
          </div>

          <Button
            id={service.id}
            onClick={() => attSupplierToService(service.id)}
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
