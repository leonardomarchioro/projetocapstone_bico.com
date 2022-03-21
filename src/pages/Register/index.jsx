import FormRegister from "../../components/FormRegister";
import Ilustration from "../../assets/Computer.png";
import { PageRegister, ContainerImg } from "./style";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageRegister>
        <motion.section
          initial={{ translateX: -1000 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 100 }}
          transition={{ duration: 1 }}
        >
          <ContainerImg>
            <img src={Ilustration} alt="Computer ilustration" />
          </ContainerImg>
        </motion.section>
        <motion.section
          initial={{ translateX: 1000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 2 }}
          exit={{ translateX: 100, opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <FormRegister />
        </motion.section>
      </PageRegister>
    </motion.section>
  );
};

export default Register;
