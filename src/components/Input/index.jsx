import { ContainerInput, InputWrapper, LabCont } from "./style";

const Input = ({
  label,
  register,
  name,
  error,
  type = "text",
  children,
  ...rest
}) => {
  return (
    <InputWrapper>
      <LabCont>{!!label && <label>{label}</label>}</LabCont>
      <ContainerInput error={error}>
        <input {...register(name)} {...rest} />
        <div>{!!error && <span>{error}</span>}</div>
      </ContainerInput>
    </InputWrapper>
  );
};
export default Input;
