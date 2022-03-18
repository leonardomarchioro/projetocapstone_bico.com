import { createContext, useContext, useState } from "react";

import bicoApi from "../../services/bicoApi";
import axios from "axios";

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

  const [supplier, setSuplier] = useState(() => {
    const newSupplier = localStorage.getItem("@supplier:Bico");
    if (newSupplier) {
      return JSON.parse(newSupplier);
    }
    return {};
  });

  const SignUp = async (data) => {
    const validation = ApiCheck(data.cep);

    if ((await validation).data.cep) {
      const response = await bicoApi
        .post("/users", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("not");
    }
  };

  const ApiCheck = async (cep) => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/unicode/`
    );

    return response;
  };

  const Login = async (data) => {
    const response = await bicoApi
      .post("/login", data)
      .then((res) => {
        console.log(res);
        setUserLogin(res.data.user);
        setToken(res.data.accessToken);
        localStorage.setItem("@user:Bico", JSON.stringify(res.data.user));
        localStorage.setItem("@token:Bico", res.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  const addSupplier = async () => {
    const { email, name, tel, cep, id } = userLogin;
    const data = { email: email, name: name, cep: cep, tel: tel, id: id };

    const response = await bicoApi
      .post(
        "/suppliers",
        { ...data, services_taken: [], userId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        setSuplier(res.data.suppliers);
        localStorage.setItem(
          "@supplier:Bico",
          JSON.stringify(res.data.suppliers)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{ userLogin, token, supplier, Login, SignUp, addSupplier }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

/*
OBS: 
No cadastro nao ha armazanagem de localStorage, pois queremos que o usuario faca login apos cadastro.


PARA SUPLIERS: 

 OD ID E O USER ID DEVEM SER IGUAIS <=> pois indicam o mesmo usuario tornando-se um prestador de servico

*/
