import { Container } from "./styles";

import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";

import DashboardSuplier from "../../components/DashboardSuplier";
import DashboardClient from "../../components/DashboardClient";

import { useUser } from "../../providers/User";
import { useState, useEffect } from "react";
import ModalConfirmation from "../../components/ModalConfirmation";

const Dashboard = () => {
  const { userLogin, supplierGet } = useUser();
  const [client, setClient] = useState(true);
  const [showService, setShowService] = useState(false);
  const [profile, setProfile] = useState(false);
  const [newSupplier, setNewSupplier] = useState(false);

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
      <section>
        {newSupplier && <ModalConfirmation setNewSupplier={setNewSupplier} />}

        <DashNavMobile
          handleService={handleService}
          handleProfile={handleProfile}
        />

        <AsideProfile
          handlePage={handlePage}
          profile={profile}
          setNewSupplier={setNewSupplier}
        />

        {client ? (
          <DashboardClient showService={showService} />
        ) : (
          <DashboardSuplier />
        )}
      </section>
    </Container>
  );
};

export default Dashboard;
