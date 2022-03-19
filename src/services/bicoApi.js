import axios from "axios";

const bicoApi = axios.create({
  baseURL: "https://api-kenzie-bico.herokuapp.com/",
});

export default bicoApi;
