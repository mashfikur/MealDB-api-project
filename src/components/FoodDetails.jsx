import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import useMainContext from "../hooks/useMainContext";

const FoodDetails = () => {
  const details = useLoaderData();
  const {handleAddToCart}=useMainContext()
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
  const ytLink = strYoutube.replace("watch", "embed");
  const foodInfo = {
    mealID: idMeal,
    name: strMeal,
    image: strMealThumb,
    category: strCategory,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <div className=" flex items-center">
          <Link to={"/foods"}>
            <button className="btn btn-neutral flex-0 ">go back</button>
          </Link>

          <h3 className="text-center font-bold text-5xl drop-shadow-lg mb-12 flex-1">
            {strMeal}{" "}
          </h3>

          <div>
            <button
              onClick={() => handleAddToCart(foodInfo)}
              className="btn btn-warning  font-semibold"
            >
              Favourite
            </button>
          </div>
        </div>

        <div className="flex items-center  ">
          <div className=" w-1/2 ">
            <img
              className="w-[70%] mx-auto border-4 border-warning rounded-lg"
              src={strMealThumb}
              alt="food-image"
            />
          </div>

          <div className=" w-1/2 text-center">
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
            <div className="font-semibold border-b-4  border-warning py-4">
              <p>{strInstructions} </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-2">
                <a target="blank" className="underline " href={strYoutube}>
                  Demo
                </a>
              </h3>
              <iframe
                className="mx-auto"
                width="560"
                height="315"
                src={ytLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
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
