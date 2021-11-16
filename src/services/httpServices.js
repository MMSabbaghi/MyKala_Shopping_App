import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const http = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default http;
