import MyServices from "../MyServices";
import ServiceRequest from "../ServiceRequest";

const DashboardClient = ({ showService }) => {
  return (
    <>
      <ServiceRequest showService={showService} />
      <MyServices showService={showService} />
    </>
  );
};
export default DashboardClient;
