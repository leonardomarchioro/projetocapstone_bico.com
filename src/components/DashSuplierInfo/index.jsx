import { ContainerService, Div } from "./styles.js";
import Button from "../Button";
import { useService } from "../../providers/Services/index.js";
import { DivPar } from "../DashboardSuplier/styles.js";

const ContainerInfo = ({ service }) => {
  const { attSupplierToService } = useService();

  return (
    <>
      <ContainerService>
        <Div>
          <div>
            <h3>{service.name}</h3>
            <span>{service.category}</span>
          </div>
          <button
            id={service.id}
            onClick={() => attSupplierToService(service.id)}
            text={"Candidatar-se"}
          >
            {" "}
            Candidatar-se
          </button>
        </Div>
        <DivPar>{service.description}</DivPar>
        <span>{service.dateActual}</span>
      </ContainerService>
    </>
  );
};

export default ContainerInfo;
