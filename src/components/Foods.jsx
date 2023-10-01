import { useLoaderData } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const foods = useLoaderData();
  const foodsArray=foods.meals
  return (
    <div className="text-2xl my-8 text-center font-medium">
      <p className="font-medium" > TOTAL FOODS : {foodsArray.length} </p>
      <div className="grid grid-cols-4 mt-6 gap-6">
        {
          foodsArray.map(food=><Food key={food.idMeal} food={food} ></Food>)  
        }
      </div>
    </div>
  );
};

export default Foods;
