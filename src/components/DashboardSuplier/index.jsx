import { useService } from "../../providers/Services";
import { Container } from "./styles";
import { useEffect } from "react";
import ContainerInfo from "../DashSuplierInfo";

const DashboardSuplier = () => {
  const { getAllServices, allServices } = useService();

  useEffect(() => {
    getAllServices();
  }, []);
  // console.log(allServices);
  return (
    <Container>
      <h2>PÁGINA DE ANÚNCIOS</h2>
      <ul>
        {allServices.map((service) => {
          return <ContainerInfo key={service.id} service={service} />;
        })}
      </ul>
    </Container>
  );
};

export default DashboardSuplier;
