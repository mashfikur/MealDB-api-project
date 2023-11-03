import axios from "axios";

const useAxios = () => {
  const axiosCustom = axios.create({
    baseURL: "http://localhost:5000",
  });

  return axiosCustom;
};

export default useAxios;
