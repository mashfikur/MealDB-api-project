import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Food({ food, handleAddToCart }) {
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

        <div className="flex items-center justify-between px-4">
          <button className="text-base bg-black text-white btn hover:bg-black rounded-full ">
            <Link to={`${food.idMeal}`}>Show Details</Link>
          </button>
          <button
            onClick={() => handleAddToCart(food)}
            className="text-base bg-[#FBBD23]  text-black btn hover:bg-[#FBBD23] rounded-full "
          >
            <> &#10084; Favourite</>
          </button>
        </div>
      </div>
    </div>
  );
}

Food.propTypes = {
  food: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Food;
