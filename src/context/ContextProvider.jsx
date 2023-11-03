import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Authentication/AuthProvider";
export const MainContext = createContext(null);

const ContextProvider = ({ children }) => {
  const axiosCustom = useAxios();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser?.uid);

  const handleAddToCart = (food) => {
    food.userId = currentUser?.uid;
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
