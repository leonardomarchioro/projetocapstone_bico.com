import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useUser } from "../../providers/User";

import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { ContainerModal } from "./style";

import { Link } from "react-router-dom";

const ModalLogin = () => {
  const { Login, token } = useUser();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^[0-9a-zA-Z]{8,}$/,
        "Deve conter ao menos 8 caracteres e um número"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = ({ email, password }) => {
    const login = {
      email,
      password,
    };

    Login(login);
  };

  return (
    <ContainerModal>
      <form onSubmit={handleSubmit(handleLogin)}>
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
        />
        <Button type="submit" text="Entrar" />
      </form>
      <Link to="/register">Cadastre-se aqui</Link>
    </ContainerModal>
  );
};

export default ModalLogin;
