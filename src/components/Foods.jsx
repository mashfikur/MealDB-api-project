import Food from "./Food";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

const Foods = () => {
  const [serachInput, setSearchInput] = useState(null);
  const [foods, setFoods] = useState([]);
  const [foodLoading, setFoodLoading] = useState(true);
  const axiosCustom = useAxios();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${
          serachInput ? serachInput : "a"
        }`
      )
      .then((res) => {
        setFoods(res.data.meals);
        setFoodLoading(false);
      });
  }, [serachInput]);

  // async () => {
  //   const res = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/search.php?s=${
  //       serachInput ? serachInput : "a"
  //     }`
  //   );

  //   return res.json();
  // },

  // using query
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["foods"],
  //   queryFn: async () => {
  //     return axios
  //       .get(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?s=${
  //           serachInput ? serachInput : "j"
  //         }`
  //       )
  //       .then((res) => {
  //         return res.data;
  //       });
  //   },
  // });

  // console.log(data);

  const handleAddToCart = (food) => {
    console.log(food);
  };

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

      {foodLoading && (
        <div>
          <p>data is loading....</p>
        </div>
      )}

      <div className="grid grid-cols-4 mt-6 gap-6">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.idMeal}
              handleAddToCart={handleAddToCart}
              food={food}
            ></Food>
          ))}
      </div>
    </div>
  );
};

export default Foods;
