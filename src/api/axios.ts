import axios from "axios";
const request = axios.create({
  baseURL: "https://restapi.amap.com/v3",
  timeout: 5000,
});
export default request;
