import { Container } from "./styles";

import Logo from "../../components/Logo";
import DashNavMobile from "../../components/DashNavMobile";
import AsideProfile from "../../components/AsideProfile";
import Button from "../../components/Button";
import SectionAddServices from "../../components/SectionAddServices";

import { useUser } from "../../providers/User";
import { useState, useEffect } from "react";

const DashboardClient = () => {
  const { addSupplier, userLogin, supplier, supplierGet } = useUser();
  const { dashboard, setDashboard } = useState("client");
  console.log(supplier);

  const handlePage = () => {
    dashboard === "client" ? setDashboard("supplier") : setDashboard("client");
  };

  useEffect(() => {
    if (userLogin.type === "supplier") {
      supplierGet();
    }
  }, []);
  console.log(userLogin.type);

  return (
    <Container>
      <Logo />
      <DashNavMobile />
      <AsideProfile />
      {/* <SectionAddServices /> */}
      {dashboard === "client" ? <div>cliente</div> : <div>Biqueiro</div>}
      {supplier ? (
        <>
          <div>Página de biqueiro</div>
          <Button onClick={handlePage} text="Trocar página" />
        </>
      ) : (
        <Button onClick={addSupplier} text="Seja Membro" />
      )}
    </Container>
  );
};

export default DashboardClient;
