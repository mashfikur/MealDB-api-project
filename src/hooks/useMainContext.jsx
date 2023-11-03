import { useContext } from "react";
import { MainContext } from "../context/ContextProvider";

const useMainContext = () => {
  const mainContext = useContext(MainContext);
  return mainContext;
};

export default useMainContext;
