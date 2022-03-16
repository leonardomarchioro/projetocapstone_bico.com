const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <div>
      {!!label && <label>{label}</label>}
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </div>
  );
};
export default Input;
