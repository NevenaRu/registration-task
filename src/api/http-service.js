import axios from "axios";

const baseURL = "http://localhost:3000/";

const getRegistrationLabels = () => axios.get(baseURL + "registrationLabels");
const createUser = (user) => axios.post(baseURL + "createUser", user);

const httpService = {
  getRegistrationLabels,
  createUser,
};

export default httpService;
