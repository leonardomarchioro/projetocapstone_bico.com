import { createContext, useState, useContext } from "react";
import bicoApi from "../../services/bicoApi";
import { useUser } from "../User";

const ServiceContext = createContext();

export const ProviderService = ({ children }) => {
  const { userLogin, token, supplier, supplierGet } = useUser();
  const [services, setService] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);
  const [allServicesClient, setAllServicesClient] = useState([]);
  const [average, setAverage] = useState(0);

  const getAllServices = async () => {
    const response = await bicoApi
      .get("/services", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setAllServices(res.data);
        setAvailableServices(() => {
          const available = res.data.filter(
            (service) => service.type === "available"
          );
          return available;
        });
      })
      .catch((err) => err);
  };

  const getSevicesClient = async () => {
    const response = await bicoApi
      .get(`/services?clientId=${userLogin.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllServicesClient(res.data);
        setService(() => {
          const unComplet = res.data.filter(
            (service) => service.type !== "complet"
          );
          return unComplet;
        });
      })
      .catch((err) => err);
  };

  const addService = async (data, success, error) => {
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
      .then((res) => {
        success();
      })
      .catch((err) => error());
    getSevicesClient();
  };

  const attSupplierToService = async (dataId, success, error) => {
    const response = await bicoApi
      .patch(
        `/services/${dataId}`,
        { supplier: supplier, type: "unavailable" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        success();
        getAllServices();
      })
      .catch((err) => {
        error();
      });
  };

  const regectSupplierToService = async (dataId, success, error) => {
    const response = await bicoApi
      .patch(
        `/services/${dataId}`,
        { supplier: {}, type: "available" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        success("Serviço rejeitado");
        getSevicesClient();
      })
      .catch((err) => {
        error();
      });
  };

  const UpdateAverage = async (supplierId) => {
    const response = await bicoApi
      .get(`/suppliers/${supplierId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        const sum = res.data.services_taken.reduce((acc, cur) => {
          return cur.review.score + acc;
        }, 0);

        setAverage(sum / res.data.services_taken.length);
      })
      .catch((err) => err);
  };

  const getServiceTakenSupplier = async (
    category,
    dataId,
    dataReview,
    supplierId,
    success,
    error
  ) => {
    const response = await bicoApi
      .get(`/suppliers?userId=${supplierId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        attServiceReview(
          category,
          dataId,
          dataReview,
          supplierId,
          res.data[0].services_taken,
          success,
          error
        );
      });
  };

  const attServiceReview = async (
    category,
    dataId,
    dataReview,
    supplierId,
    serviceTaken,
    success,
    error
  ) => {
    const supplierResponse = await bicoApi
      .patch(
        `/suppliers/${supplierId}`,
        {
          services_taken: [
            ...serviceTaken,
            {
              category: category,
              serviceId: dataId,
              review: dataReview,
            },
          ],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => res)
      .catch((err) => err);

    const response = await bicoApi
      .patch(
        `/services/${dataId}`,
        { review: dataReview, type: "complet" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        success("Serviço completado");
        getSevicesClient();
        UpdateAverage(supplierId);
      })
      .catch((err) => error());
  };

  const deleteService = async (dataId, success, error) => {
    const response = await bicoApi.delete(`/services/${dataId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    success();
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
        availableServices,
        regectSupplierToService,
        allServicesClient,
        getServiceTakenSupplier,
        UpdateAverage,
        average,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
