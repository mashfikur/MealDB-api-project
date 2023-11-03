import PropTypes from "prop-types";
import { createContext } from "react";
import useAxios from "../hooks/useAxios";
export const MainContext = createContext(null);

const ContextProvider = ({ children }) => {
  const axiosCustom = useAxios();

  const handleAddToCart = (food) => {
    axiosCustom
      .post("/api/v1/add-favourite", food)
      .then((res) => console.log(res.data));
  };

  const value = {
    handleAddToCart,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
