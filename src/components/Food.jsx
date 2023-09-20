import PropTypes from "prop-types";

function Food({ food }) {
  return (
    <div className="border-2 border-yellow-700  rounded-lg p-3" >
        <p className="text-xl font-medium text-orange-500 text-center"> Food Id : {food.idMeal} </p>
      <h3 className="text-2xl font-semibold text-amber-700">{food.strMeal}</h3>
      <img className="rounded-lg my-3 object-cover " src={food.strMealThumb} alt="food-image" />
    </div>
  );
}

Food.propTypes = {
  food: PropTypes.object,
};

export default Food;
