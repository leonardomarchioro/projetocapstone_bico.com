import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useUser } from "../../providers/User";
import { useAvatars } from "../../providers/Avatars";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Button from "../Button";

import { ContainerPage, ContainerTitle } from "./style";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FormRegister = () => {
  const { SignUp } = useUser();
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras")
      .max(16, "Pode conter no máximo 16 carácteres"),
    cep: yup
      .string()
      .required("Cep obrigatório")
      .matches(/^[0-9]{5}-[0-9]{3}$/, "Cep inválido"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .matches(/^[0-9]{4}-[0-9]{4}$/, "Número inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(^[0-9a-z]{8,}$)/,
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

  const success = () => {
    toast.success("Conta criada com sucesso!");
    history.push({ pathname: "/", prevPath: "/register" });
  };
  const error = (errorMsg) => {
    console.log(errorMsg);
    if (errorMsg === "Email already exists") {
      toast.error("Email já cadastrado");
    } else if (errorMsg === "CEP inválido!") {
      toast.error(errorMsg);
    } else {
      toast.error("Houve algum erro, tente mais tarde");
    }
  };
  const { getRandomAvatar } = useAvatars();

  const handleRegister = ({ name, cep, email, phone, password }) => {
    const register = {
      name,
      cep,
      email,
      phone,
      password,
      avatar: getRandomAvatar(),
    };

    SignUp(register, success, error);
  };

  return (
    <ContainerPage>
      <ContainerTitle>
        <h4>
          Já possuí uma conta?{" "}
          <Link to={{ pathname: "/", prevPath: "/register" }}>Login</Link>
        </h4>
      </ContainerTitle>

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
          placeholder="Ex: 00000-000"
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
          placeholder="Ex: 9999-9999"
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

export default FormRegister;
