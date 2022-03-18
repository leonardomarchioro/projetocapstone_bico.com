import { Container } from "./styles";
import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";
import SectionUserServices from "../../components/SectionUserServices";
import Button from "../../components/Button";

import { useUser } from "../../providers/User";

const DashboardClient = () => {
  const { addSupplier } = useUser();

  return (
    <Container>
      <Logo />
      <DashNavMobile />
      <AsideProfile />
      <SectionUserServices />
      <Button onClick={addSupplier} text="Seja membro" />
    </Container>
  );
};

export default DashboardClient;
