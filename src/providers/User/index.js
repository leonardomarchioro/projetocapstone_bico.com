import { createContext, useContext, useState } from "react";
import bicoApi from "../../services/bicoApi";

const UserContext = createContext();

export const ProviderUser = ({ children }) => {
  const [userLogin, setUserLogin] = useState(() => {
    const newUser = localStorage.getItem("@user:Bico");
    if (newUser) {
      return JSON.parse(newUser);
    }
    return {};
  });
  const [token, setToken] = useState(localStorage.getItem("@token:Bico") || "");

  const SignIn = async (data) => {
    const response = await bicoApi
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const Login = async (data) => {
    const response = await bicoApi
      .post("/login", data)
      .then((res) => {
        setUserLogin(res.user);
        setToken(res.accessToken);
        localStorage.setItem("@user:Bico", JSON.stringify(res.data.user));
        localStorage.setItem("@token:Bico", res.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ userLogin, token, Login, SignIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

/*
OBS: 
No cadastro nao ha armazanagem de localStorage, pois queremos que o usuario faca login apos cadastro.
*/
