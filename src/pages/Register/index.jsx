import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { ContainerPage } from "./style";

const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras"),
    cep: yup.string().required("Cep obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    phone: yup.string().required("Telefone obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^[0-9a-zA-Z]{8,}$/,
        "Deve conter ao menos 8 caracteres e um número"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ name, cep, email, phone, password }) => {
    const register = {
      name,
      cep,
      email,
      phone,
      password,
    };
    console.log(register);

    // Função do Providers para enviar o reistro de novo usuário. \\
  };

  return (
    <ContainerPage>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input
          label="Nome completo"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Digite o nome aqui"
          type="name"
        />
        <Input
          label="CEP"
          register={register}
          name={"cep"}
          error={errors.cep?.message}
          placeholder="Digite o cep aqui"
          type="number"
        />
        <Input
          label="E-mail"
          register={register}
          name={"email"}
          error={errors.email?.message}
          placeholder="email@exemplo.com"
          type="email"
        />
        <Input
          label="Telefone"
          register={register}
          name={"phone"}
          error={errors.phone?.message}
          placeholder="Digite um telefone de contato aqui"
          type="number"
        />
        <InputPassword
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Digite uma senha aqui"
          type="password"
        />
        <InputPassword
          label="Confirme sua senha"
          register={register}
          name={"confirmPassword"}
          error={errors.confirmPassword?.message}
          placeholder="Confirme sua senha aqui"
          type="password"
        />
        <Button type="submit" text="Cadastrar-se" />
      </form>
    </ContainerPage>
  );
};

export default Register;
