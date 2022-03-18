import { Container } from "./styles";
import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";
import SectionAddServices from "../../components/SectionAddServices";

const DashboardClient = () => {
  return (
    <Container>
      <Logo />
      <DashNavMobile />
      {/* <AsideProfile /> */}
      <SectionAddServices />
    </Container>
  );
};

export default DashboardClient;
