import { createContext, useState, useContext } from "react";
import bicoApi from "../../services/bicoApi";
import { useUser } from "../User";

const ServiceContext = createContext();

export const ProviderService = ({ children }) => {
  const { userLogin, token, supplier } = useUser();
  const [services, setService] = useState([]);
  const [allServices, setAllServices] = useState([]);

  const getAllServices = async () => {
    const response = await bicoApi
      .get("/services", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setAllServices(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getSevicesClient = async () => {
    const response = await bicoApi
      .get(`/services?clientId=${userLogin.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addService = async (data, sucess, error) => {
    const { email, name, cep, phone, id } = userLogin;
    const newData = {
      ...data,
      email: email,
      name: name,
      cep: cep,
      phone: phone,
      clientId: id,
    };
    const response = await bicoApi
      .post(
        "/services",
        { ...newData, review: {}, supplier: {}, type: "available" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => sucess("Requisição de serviço feita com sucesso"))
      .catch((err) => error(err.response.data));
    getSevicesClient();
  };

  const attSupplierToService = async (dataId, sucess, error) => {
    const response = await bicoApi
      .patch(
        `/services/${dataId}`,
        { supplier: supplier, type: "unavailable" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        sucess("Candidatado com sucesso!");
      })
      .catch((err) => {
        error(err.response.data);
        console.log(err);
      });
  };

  const attServiceReview = async (dataId, dataReview) => {
    const response = await bicoApi
      .patch(
        `/services/${dataId}`,
        { review: dataReview, type: "complet" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  const deleteService = async (dataId, sucess) => {
    const response = await bicoApi.delete(`/services/${dataId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    sucess("Requisição deletada");
    getSevicesClient();
  };

  return (
    <ServiceContext.Provider
      value={{
        addService,
        getAllServices,
        attSupplierToService,
        attServiceReview,
        deleteService,
        getSevicesClient,
        services,
        allServices,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
