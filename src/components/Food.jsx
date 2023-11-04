import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Food({ food }) {
  return (
    <div className="border-2 border-yellow-700 rounded-lg p-3 shadow-xl">
      <div>
        <p className="text-xl font-medium text-orange-500 text-center">
          {" "}
          Food Id : {food.idMeal}{" "}
        </p>
        <h3 className="text-2xl font-semibold text-amber-700">
          {food.strMeal}
        </h3>
        <img
          className="rounded-lg my-3 w-[80%] mx-auto"
          src={food.strMealThumb}
          alt="food-image"
        />

        <div className="flex items-center justify-center">
          <Link to={`${food.idMeal}`}>
            {" "}
            <button className="text-base bg-black text-white btn hover:bg-black rounded-full ">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Food.propTypes = {
  food: PropTypes.object,
};

export default Food;
