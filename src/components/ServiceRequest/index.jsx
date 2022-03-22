import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useService } from "../../providers/Services";

import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";
import { Container } from "./styles";

const ServiceRequest = ({ showService }) => {
  const { addService } = useService();

  const currentDate = new Date();

  const schema = yup.object().shape({
    category: yup
      .string()
      .required("Tipo de serviço obrigatório")
      .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras"),
    date: yup
      .date()
      .required("Data obigatória")
      .min(currentDate, "Só é possível incluir datas futuras"),
    description: yup.string().required("Descrição do serviço obrigatória"),
  });

  const success = () => {
    toast.success("Requisição de serviço feita com sucesso!");
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postService = ({ category, date, description }) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const dateActual = `${day}/${month}/${year}`;

    const data = {
      category,
      dateActual,
      description,
    };

    addService(data, success, error);
  };

  return (
    <Container error={errors.description?.message} showService={showService}>
      <h1>SOLICITAÇÃO DE SERVIÇO</h1>

      <form onSubmit={handleSubmit(postService)}>
        <div className="inputArea">
          <Input
            label="Tipo de serviço"
            register={register}
            name={"category"}
            error={errors.category?.message}
            placeholder="Ex: Jardinagem"
          />
          <Input
            label="Selecione uma data para o serviço"
            register={register}
            name={"date"}
            error={errors.date?.message}
            type="date"
          />
          <Button
            text="Solicitar serviço"
            type="submit"
            className="buttonDesktop"
          />
        </div>
        <div className="textArea">
          <label>Descrição do serviço</label>
          <textarea
            {...register("description")}
            rows="5"
            cols="33"
            maxLength="150"
            placeholder="Escreva aqui uma descrição do serviço que você quer solicitar"
          />
          <div className="errorMessage">
            {!!errors.description && <span>{errors.description.message}</span>}
          </div>
        </div>
        <Button
          text="Solicitar serviço"
          type="submit"
          className="buttonMobile"
        />
      </form>
    </Container>
  );
};

export default ServiceRequest;
