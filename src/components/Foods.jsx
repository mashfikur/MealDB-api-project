import Food from "./Food";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";

const Foods = () => {
  const [serachInput, setSearchInput] = useState(null);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const { isPending, data: foods } = useQuery({
    queryKey: ["foods", serachInput],
    queryFn: async () => {
      return axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${
            serachInput ? serachInput : "a"
          }`
        )
        .then((res) => {
          return res.data;
        });
    },
  });

  return (
    <div className="text-2xl my-8 text-center font-medium container mx-auto">
      <div className="flex items-center justify-center relative">
        <div className="relative">
          <div className="absolute top-3 left-3">
            <AiOutlineSearch className="text-black"></AiOutlineSearch>
          </div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className="input focus:outline-none input-bordered rounded-full pl-12 w-full  px-36"
          />
        </div>
      </div>

      {isPending && (
        <div className="flex flex-col items-center justify-center min-h-[100vh]">
          <Vortex
            visible={true}
            height="120"
            width="120"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[ "yellow", "orange","brown"]}
            
          />
        </div>
      )}

      <div className="grid  px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-6">
        {foods &&
          foods.meals.map((food) => (
            <Food key={food.idMeal} food={food}></Food>
          ))}
      </div>
    </div>
  );
};

export default Foods;
