import axios from "axios";


axios.defaults.baseURL = "http://localhost:4500";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
// axios.defaults.withCredentials = true;

class GenericService {
  constructor() {}

  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

  delete = (url, id) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url, id)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  postReg = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });

  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}

export default GenericService;
