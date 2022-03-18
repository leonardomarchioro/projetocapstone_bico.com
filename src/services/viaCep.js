import axios from "axios";

const viaCep = axios.create({
  baseURL: "https://api-kenzie-bico.herokuapp.com/",
});

export default viaCep;
