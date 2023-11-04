import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
export const MainContext = createContext(null);
import { AiFillHeart } from "react-icons/ai";

const ContextProvider = ({ children }) => {
  const axiosCustom = useAxios();
  const { currentUser } = useContext(AuthContext);
  const successMessage = (
    <div className="flex items-center gap-2 ">
      <AiFillHeart></AiFillHeart>
      <p>Added to Favourites</p>
    </div>
  );

  const handleAddToCart = (food) => {
    if (currentUser) {
      food.userId = currentUser?.uid;
    }
    axiosCustom.post("/api/v1/add-favourite", food).then((res) => {
      if (res.data) {
        console.log(res.data);
        toast.success(successMessage);
      }
    });
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
