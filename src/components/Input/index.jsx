const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <div>
      <div>{!!label && <label>{label}</label>}</div>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </div>
  );
};
export default Input;
