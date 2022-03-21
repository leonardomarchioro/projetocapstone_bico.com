import { ContainerService, Div } from "./styles.js";
import Button from "../Button";
import { useService } from "../../providers/Services/index.js";
import { DivPar } from "../DashboardSuplier/styles.js";

const ContainerInfo = ({ service }) => {
  const { attSupplierToService } = useService();

  return (
    <>
      <ContainerService>
        <div>
          <h3>{service.name}</h3>
          <span>Categoria: {service.category}</span>
        </div>

        <Button
          id={service.id}
          onClick={() => attSupplierToService(service.id)}
          text={"Candidatar-se"}
        />
      </ContainerService>
    </>
  );
};

export default ContainerInfo;
