import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "X-custom-header": "some header text" },
});

export default instance;
