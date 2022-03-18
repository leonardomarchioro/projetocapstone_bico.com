import { createContext, useState, useContext } from "react";
import bicoApi from "../../services/bicoApi";
import { useUser } from "../User";

const ServiceContext = createContext()

export const ProviderService = ({ children }) => {

    const { userLogin, token, supplier } = useUser()

    const addService = async (data) => {
        const { email, name, cep, tel, id } = userLogin
        const newData = { ...data, email: email, name: name, cep: cep, tel: tel, clientId: id }
        const response = await bicoApi.post("/services", { ...newData, review: {}, supplier: {}, type: "available" }, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }


    const getAllServices = async (data) => {

        const response = await bicoApi.get("/services", { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => console.log(res)).catch((err) => console.log(err))
    }


    const attSupplierToService = async (dataId) => {
        const response = await bicoApi.patch(`/services/${dataId}`, { supplier: supplier, type: "unavailable" },
            {
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => console.log(res)).catch((err) => console.log(err))
    }

    const attServiceReview = async (dataId, dataReview) => {
        const response = await bicoApi.patch(`/services/${dataId}`, { review: dataReview }, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }

    const deleteService = async (dataId) => {
        const response = await bicoApi.delete(`/services/${dataId}`, { headers: { Authorization: `Bearer ${token}` } })
    }

    return (
        <ServiceContext.Provider value={{ addService, getAllServices, attSupplierToService, attServiceReview, deleteService }}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useService = () => useContext(ServiceContext)

