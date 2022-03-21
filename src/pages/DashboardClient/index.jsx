import { Container } from "./styles";
import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";
import SectionUserServices from "../../components/SectionUserServices";

const DashboardClient = () => {
  return (
    <Container>
      <Logo />
      <DashNavMobile />
      <AsideProfile />
      <SectionUserServices />
    </Container>
  );
};

export default DashboardClient;