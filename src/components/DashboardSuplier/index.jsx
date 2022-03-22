import { useService } from "../../providers/Services";
import { Container } from "./styles";
import { useEffect } from "react";
import ContainerInfo from "../DashSuplierInfo";
import EmptySupplier from "../../assets/EmptySupplier.svg";

const DashboardSuplier = () => {
  const { getAllServices, availableServices } = useService();

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <Container>
      <h2>PÁGINA DE ANÚNCIOS</h2>
      <ul>
        {availableServices.length > 0 ? (
          availableServices.map((service) => {
            return <ContainerInfo key={service.id} service={service} />;
          })
        ) : (
          <div className="svgEmpty">
            <img src={EmptySupplier} alt="Empty Supplier" />
            <h3>Nenhum serviço disponível no momento</h3>
          </div>
        )}
      </ul>
    </Container>
  );
};

export default DashboardSuplier;
