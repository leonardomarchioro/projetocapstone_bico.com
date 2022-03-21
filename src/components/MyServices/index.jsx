import { useService } from "../../providers/Services";
import { useEffect } from "react";
import MyServicesComponent from "../../MyServicesComponent";
import { Container } from "./styles";

const MyServices = ({ showService }) => {
  const { getSevicesClient, services } = useService();

  console.log(services);

  useEffect(() => {
    getSevicesClient();
  }, []);

  // console.log(services);
  return (
    <Container showService={showService}>
      <h1>MEUS SERVIÇOS SOLICITADOS</h1>
      <ul>
        {services.map((service) => {
          return <MyServicesComponent service={service} />;
        })}
      </ul>
    </Container>
  );
};
export default MyServices;
