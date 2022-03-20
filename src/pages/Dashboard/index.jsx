import { Container } from "./styles";

import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";

import DashboardSuplier from "../../components/DashboardSuplier";
import DashboardClient from "../../components/DashboardClient";

import { useUser } from "../../providers/User";
import { useState, useEffect } from "react";
import ServiceSupplier from "../../components/ComponentSupplier";

const Dashboard = () => {
  const { userLogin, supplierGet } = useUser();
  const [client, setClient] = useState(true);

  const handlePage = () => {
    client ? setClient(false) : setClient(true);
  };

  useEffect(() => {
    if (userLogin.type === "supplier") {
      supplierGet();
    }
  }, []);

  return (
    <Container>
      <Logo />
      <DashNavMobile />
      <AsideProfile handlePage={handlePage} />
      {client ? <DashboardClient /> : <DashboardSuplier />}
    </Container>
  );
};

export default Dashboard;
