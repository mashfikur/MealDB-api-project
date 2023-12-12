import Food from "./Food";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
            <AiOutlineSearch></AiOutlineSearch>
          </div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className="input focus:outline-none input-bordered rounded-full pl-12 w-full  max-w-xs"
          />
        </div>
      </div>

      {isPending && (
        <div>
          <p>data is loading....</p>
        </div>
      )}

      <div className="grid grid-cols-4 mt-6 gap-6">
        {foods &&
          foods.meals.map((food) => (
            <Food key={food.idMeal} food={food}></Food>
          ))}
      </div>
    </div>
  );
};

export default Foods;
