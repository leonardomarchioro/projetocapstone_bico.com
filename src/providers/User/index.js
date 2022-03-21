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

  const SignUp = async (data, success, error) => {
    data.type = "client";

    const validation = ApiCheck(data.cep);
    if ((await validation).data.cep) {
      const response = await bicoApi
        .post("/users", data)
        .then(() => success())
        .catch((err) => error(err.response.data));
    } else {
      error("CEP inválido!");
    }
  };

  const ApiCheck = async (cep) => {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/unicode/`
    );

    return response;
  };

  const Login = async (data, history, success, error) => {
    const response = await bicoApi
      .post("/login", data)
      .then((res) => {
        setUserLogin(res.data.user);
        setToken(res.data.accessToken);
        localStorage.setItem("@user:Bico", JSON.stringify(res.data.user));
        localStorage.setItem("@token:Bico", res.data.accessToken);
        history.push("/dashboard");
        success();
      })
      .catch((err) => {
        error(err.response.data);
      });
  };

  const addSupplier = async (success, error) => {
    const { email, name, phone, cep, id } = userLogin;
    const update = await bicoApi
      .patch(
        `/users/${id}`,
        { type: "supplier" },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        localStorage.setItem("@user:Bico", JSON.stringify(res.data));
      });
    const data = {
      email: email,
      name: name,
      cep: cep,
      phone: phone,
    };

    const response = await bicoApi
      .post(
        "/suppliers",
        { ...data, services_taken: [], userId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        success();
        setSuplier([res.data]);
      })
      .catch((err) => {
        error(err.response.data);
        console.log(err);
      });
  };
  const supplierGet = async () => {
    const response = await bicoApi
      .get(`/suppliers?userId=${userLogin.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSuplier(res.data);
      })
      .catch((err) => {
        console.log(err);
        //Remover
      });
  };

  const handleLogout = (history) => {
    localStorage.clear();
    setSuplier(false);
    setToken("");
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
