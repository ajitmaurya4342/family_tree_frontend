import axios from "axios";
import { BASEURL } from "@/config";

const Api = () => {
  const instance = axios.create({
    baseURL: BASEURL,
  });
  let JWT = window.localStorage.getItem("JWT_TOKEN");

  if (JWT) {
    instance.defaults.headers.common["Authorization"] = JWT;
  }

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error && error.response && error.response.status === 403) {
        // Vue.toasted.show("You are not authorized");
      } else if (error && error.response && error.response.status === 401) {
        // localStorage.clear();
      } else {
        return Promise.reject(error);
      }
    }
  );

  return instance;
};

export default Api;
