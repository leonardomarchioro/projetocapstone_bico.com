import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const InputPassword = ({ label, register, name, error, ...rest }) => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div>
      <div>{!!label && <label>{label}</label>}</div>
      <div>
        <input {...register(name)} {...rest} type={type} />
        <button onClick={showPassword} type="button">
          {type === "password" ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      <div>{!!error && <span>{error}</span>}</div>
    </div>
  );
};
export default InputPassword;
