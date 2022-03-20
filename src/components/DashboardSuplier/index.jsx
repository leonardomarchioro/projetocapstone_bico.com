import { useService } from "../../providers/Services";
import Button from "../Button";
import { Container, ContainerInfo, Div } from "./styles";
import { useEffect } from "react";
const DashboardSuplier = () => {
  const { getAllServices, allServices, attSupplierToService } = useService();

  useEffect(() => {
    getAllServices();
  }, []);
  console.log(allServices);
  return (
    <Container>
      {allServices.map((service) => {
        return (
          <>
            <ContainerInfo>
              <Div>
                <h3>{service.name}</h3>
                <span>{service.category}</span>
              </Div>
              <Button
                id={service.id}
                onClick={() => attSupplierToService(service.id)}
                text={"Candidatar-se"}
              />
            </ContainerInfo>
            <p>{service.description}</p>
            <span>{service.date}</span>
          </>
        );
      })}
    </Container>
  );
};

export default DashboardSuplier;
