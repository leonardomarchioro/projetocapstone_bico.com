import { ContainerInput } from "./style";

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
    <ContainerInput error={error}>
      <div>{!!label && <label>{label}</label>}</div>
      {type === "select" ? (
        <select {...register(name)} {...rest}>
          {children}
        </select>
      ) : (
        <input {...register(name)} {...rest} type={type} />
      )}
      <div>{!!error && <span>{error}</span>}</div>
    </ContainerInput>
  );
};
export default Input;
