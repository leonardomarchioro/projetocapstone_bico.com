import { Container } from "./styles";
import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";
import SectionUserServices from "../../components/SectionUserServices";
import Button from "../../components/Button";

import { useUser } from "../../providers/User";
import SectionAddServices from "../../components/SectionAddServices";

const DashboardClient = () => {
  const { addSupplier } = useUser();

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
