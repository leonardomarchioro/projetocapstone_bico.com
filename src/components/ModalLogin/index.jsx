import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/User";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { ContainerModal, Welcome, ContainerForm } from "./style";
import { toast } from "react-toastify";

const ModalLogin = () => {
  const { Login } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const success = () => {
    toast.success("Login feito com sucesso!");
  };
  const error = (errorMsg) => {
    if (errorMsg === "Incorrect password") {
      toast.error("Senha incorreta");
    } else if (errorMsg === "Cannot find user") {
      toast.error("Email não cadastrado");
    } else {
      toast.error("Houve algum erro, tente mais tarde");
    }
  };

  const handleLogin = ({ email, password }) => {
    const login = {
      email,
      password,
    };

    Login(login, history, success, error);
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
    <ContainerModal>
      <motion.section
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Welcome>Seja bem vindo!</Welcome>
        <ContainerForm>
          <form onSubmit={handleSubmit(handleLogin)}>
            <h3>Login</h3>
            <Input
              label="E-mail"
              register={register}
              name={"email"}
              error={errors.email?.message}
              placeholder="email@exemplo.com"
              type="email"
            />
            <InputPassword
              label="Senha"
              register={register}
              name={"password"}
              error={errors.password?.message}
              placeholder="Digite uma senha aqui"
              type="password"
              style
            />
            <Button type="submit" text="Login" />
            <h4>Não possui uma conta?</h4>
            <Link to="/register">Cadastre-se aqui</Link>
          </form>
        </ContainerForm>
      </motion.section>
    </ContainerModal>
  );
};

export default ModalLogin;
