import { useService } from "../../providers/Services";
import { Container } from "./styles";
import { useEffect } from "react";
import ContainerInfo from "../DashSuplierInfo";

const DashboardSuplier = () => {
  const { getAllServices, allServices } = useService();

  useEffect(() => {
    getAllServices();
  }, []);
  console.log(allServices);
  return (
    <Container>
      {allServices.map((service) => {
        return <ContainerInfo service={service} />;
      })}
    </Container>
  );
};

export default DashboardSuplier;
