import { useLoaderData } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const foods = useLoaderData();
  const foodsArray=foods.meals
  console.log(foodsArray)
  return (
    <div className="text-2xl my-16 text-center font-medium">
      <h3>Foods page</h3>
      <p> Foods : {foodsArray.length} </p>
      <div className="grid grid-cols-4 gap-6">
        {
          foodsArray.map(food=><Food key={food.idMeal} food={food} ></Food>)  
        }
      </div>
    </div>
  );
};

export default Foods;
