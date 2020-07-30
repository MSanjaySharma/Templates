import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://example.com/api", //input baseURL on api.
});

export default axios;
