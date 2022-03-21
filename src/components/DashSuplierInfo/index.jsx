import { ContainerService, Div } from "./styles.js";
import Button from "../Button";
import { useService } from "../../providers/Services/index.js";

const ContainerInfo = ({ service }) => {
  const { attSupplierToService } = useService();

  return (
    <>
      <ContainerService>
        <Div>
          <h3>{service.name}</h3>
          <span>{service.category}</span>
        </Div>
        <Button
          id={service.id}
          onClick={() => attSupplierToService(service.id)}
          text={"Candidatar-se"}
        />
      </ContainerService>
      <p>{service.description}</p>
      <span>{service.dateActual}</span>
    </>
  );
};

export default ContainerInfo;
