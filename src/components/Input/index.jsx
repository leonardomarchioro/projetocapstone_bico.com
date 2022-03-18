import { ContainerInput } from "./style";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <ContainerInput error={error}>
      <div>{!!label && <label>{label}</label>}</div>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </ContainerInput>
  );
};
export default Input;
