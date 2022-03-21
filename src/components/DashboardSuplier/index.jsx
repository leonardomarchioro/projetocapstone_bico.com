import { useService } from "../../providers/Services";
import { Container, DivPai } from "./styles";
import { useEffect } from "react";
import ContainerInfo from "../DashSuplierInfo";

const DashboardSuplier = () => {
  const { getAllServices, allServices } = useService();

  useEffect(() => {
    getAllServices();
  }, []);
  // console.log(allServices);
  return (
    <DivPai>
      <Container>
        {allServices.map((service) => {
          return <ContainerInfo key={service.id} service={service} />;
        })}
      </Container>
    </DivPai>
  );
};

export default DashboardSuplier;
