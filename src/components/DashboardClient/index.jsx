import MyServices from "../MyServices";
import ServiceRequest from "../ServiceRequest";
import { Container } from "./styles";

const DashboardClient = ({ showService }) => {
  return (
    <Container>
      <ServiceRequest showService={showService} />
      <MyServices showService={showService} />
    </Container>
  );
};
export default DashboardClient;
