import FormRegister from "../../components/FormRegister";
import Ilustration from "../../assets/Computer.png";
import { PageRegister, ContainerImg } from "./style";

const Register = () => {
  return (
    <PageRegister>
      <ContainerImg>
        <img src={Ilustration} alt="Computer ilustration" />
      </ContainerImg>
      <FormRegister />
    </PageRegister>
  );
};

export default Register;
