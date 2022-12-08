import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default axiosInstance;
// for CRUD use this http verbs
// axiosInstance.get();
// axiosInstance.post();
// axiosInstance.put();
// axiosInstance.delete();
