import { Container } from "./styles";

import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";

import DashboardSuplier from "../../components/DashboardSuplier";
import DashboardClient from "../../components/DashboardClient";

import { useUser } from "../../providers/User";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const { userLogin, supplierGet } = useUser();
  const [client, setClient] = useState(true);
  const [showService, setShowService] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleService = () => {
    setShowService(!showService);
  };

  const handlePage = () => {
    client ? setClient(false) : setClient(true);
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    if (userLogin.type === "supplier") {
      supplierGet();
    }
  }, []);

  return (
    <Container>
      <Logo className="logo" />
      <DashNavMobile
        handleService={handleService}
        handleProfile={handleProfile}
      />
      <AsideProfile handlePage={handlePage} profile={profile} />
      {client ? (
        <DashboardClient showService={showService} />
      ) : (
        <DashboardSuplier />
      )}
    </Container>
  );
};

export default Dashboard;
