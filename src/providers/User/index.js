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

  const [supplier, setSuplier] = useState(false);

  const SignUp = async (data) => {
    data.type = "client";

    const validation = ApiCheck(data.cep);
    if ((await validation).data.cep) {
      const response = await bicoApi
        .post("/users", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("Adicionar toast de erro");
    }
  };

  console.log(userLogin);
  console.log(supplier);

  const ApiCheck = async (cep) => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/unicode/`
    );

    return response;
  };

  const Login = async (data, history) => {
    console.log(data);
    const response = await bicoApi
      .post("/login", data)
      .then((res) => {
        console.log(res);
        setUserLogin(res.data.user);
        setToken(res.data.accessToken);
        localStorage.setItem("@user:Bico", JSON.stringify(res.data.user));
        localStorage.setItem("@token:Bico", res.data.accessToken);
        history.push("/client");
      })
      .catch((err) => console.log(err));
    console.log(response);
  };

  const addSupplier = async () => {
    const { email, name, phone, cep, id } = userLogin;
    const update = await bicoApi
      .patch(
        `/users/${id}`,
        { type: "supplier" },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("@user:Bico", JSON.stringify(res.data));
      });
    const data = {
      email: email,
      name: name,
      cep: cep,
      phone: phone,
    };
    console.log(data);
    const response = await bicoApi
      .post(
        "/suppliers",
        { ...data, services_taken: [], userId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setSuplier([res.data]);
      })
      .catch((err) => console.log(err));
  };
  const supplierGet = async () => {
    const response = await bicoApi
      .get(`/suppliers?userId=${userLogin.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSuplier(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = (history) => {
    localStorage.clear();
    history.push("/");
    setSuplier(false);
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        token,
        Login,
        SignUp,
        addSupplier,
        supplier,
        supplierGet,
        handleLogout,
      }}
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
