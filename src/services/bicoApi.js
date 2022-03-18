import axios from "axios";

const token = localStorage.getItem("@token:Bico" || "");

const bicoApi = axios.create({
  baseURL: "https://api-kenzie-bico.herokuapp.com/",
});

if (token) {
  bicoApi.defaults.headers.Authorization = `Bearer ${token}`;
}

export default bicoApi;
