import { Container } from "./styles";
import { motion } from "framer-motion";
import { FiCheckSquare, FiXSquare } from "react-icons/fi";
import { useUser } from "../../providers/User";
import { toast } from "react-toastify";

const ModalConfirmation = ({ setNewSupplier }) => {
  const { addSupplier } = useUser();

  const success = () => {
    toast.success("Biqueiro cadastrado com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Container>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Tem certeza que quer se tornar membro?</h2>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setNewSupplier(false);
              addSupplier(success, error);
            }}
          >
            <FiCheckSquare size={35} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setNewSupplier(false)}
          >
            <FiXSquare size={35} />
          </motion.button>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalConfirmation;
