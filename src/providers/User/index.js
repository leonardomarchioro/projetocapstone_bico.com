import { createContext, useContext, useState, useEffect } from "react";

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

  const [supplier, setSuplier] = useState(false);
  console.log(supplier);
  const SignUp = async (data) => {
    data.type = "client";

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
    console.log(userLogin);
    if (userLogin.type === "supplier") {
      console.log("teste");
      const supplierData = await bicoApi
        .get(`/suppliers?userId=${userLogin.id}`)
        .then((res) => {
          setSuplier(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const addSupplier = async () => {
    console.log(userLogin);

    const { email, name, tel, cep, id } = userLogin;
    const update = await bicoApi
      .patch(`/users/${id}`, { type: "supplier" })
      .then((res) => console.log(res));
    const data = {
      email: email,
      name: name,
      cep: cep,
      tel: tel,
    };
    console.log(data);
    const response = await bicoApi
      .post("/suppliers", { ...data, services_taken: [], userId: id })
      .then((res) => {
        setSuplier(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{ userLogin, token, Login, SignUp, addSupplier }}
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
