import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import useMainContext from "../hooks/useMainContext";
import { FaYoutube } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const FoodDetails = () => {
  const details = useLoaderData();
  const { handleAddToCart } = useMainContext();
  const foodDetail = details.meals[0];
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strInstructions,
    strYoutube,
  } = foodDetail;
  const foodInfo = {
    mealID: idMeal,
    name: strMeal,
    image: strMealThumb,
    category: strCategory,
    area: strArea,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-4 min-h-screen">
        <div className=" flex items-center lg:flex-row flex-col gap-3 px-4  ">
          <Link to={-1}>
            <button className="btn btn-neutral rounded-full px-6 flex-0 ">
              <FaArrowLeftLong className="text-xl" />
              go back
            </button>
          </Link>

          <h3 className="text-center font-bold text-5xl text-white drop-shadow-lg mb-12 flex-1">
            {strMeal}{" "}
          </h3>

          <div>
            <button
              onClick={() => handleAddToCart(foodInfo)}
              className="btn btn-warning  font-semibold"
            >
              ❤️ Favourite
            </button>
          </div>
        </div>

        <div className="flex mt-8 items-center px-4 lg:flex-row flex-col  ">
          <div className=" flex-1 ">
            <img
              className="lg:w-[60%] mx-auto border-4 border-warning rounded-lg"
              src={strMealThumb}
              alt="food-image"
            />

            <div className="flex justify-center my-10">
              <Link to={strYoutube} target="_blank">
                <button className="btn hover:bg-gray-600 text-white bg-red-600 duration-300 hover:text-white rounded-full px-6 border-none shadow-xl ">
                  Watch Recipe <FaYoutube className="text-xl" />
                </button>
              </Link>
            </div>
          </div>

          <div className=" flex-1 text-center text-white">
            <div className="text-2xl border-t-4 border-b-4  border-warning font-light py-2 ">
              <h3>Category : {strCategory} </h3>
              <h3>Area : {strArea} </h3>
              <h3 className="text-gray-400 text-base font-semibold space-x-2">
                {" "}
                {strTags
                  ? strTags
                      .split(",")
                      .map((str, idx) => <span key={idx}>#{str}</span>)
                  : ""}{" "}
              </h3>
            </div>
            <div className="font-semibold   py-4">
              <p>{strInstructions} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodDetails.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default FoodDetails;
