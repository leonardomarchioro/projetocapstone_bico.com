import { ContainerInput, InputWrapper, LabCont } from "./style";

const Input = ({ label, register, name, error, children, ...rest }) => {
  return (
    <InputWrapper>
      <LabCont>{!!label && <label>{label}</label>}</LabCont>
      <ContainerInput error={error}>
        <input {...register(name)} {...rest} />
        <div>
          {!!error && (
            <span>
              {error ===
              'date must be a `date` type, but the final value was: `Invalid Date` (cast from the value `""`).'
                ? "Data para o serviço obrigatória"
                : error}
            </span>
          )}
        </div>
      </ContainerInput>
    </InputWrapper>
  );
};
export default Input;
