import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <div className=" rounded-lg">
      <div className="card  rounded-md h-[32rem] border-2 border-black shadow-md duration-500">
        <figure>
          <img
            className="w-[100%] object-cover h-60"
            src={strCategoryThumb}
            alt="card"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-semibold uppercase underline text-">
            {strCategory}
          </h2>
          <p className="text-gray-400 font-semibold">
            {strCategoryDescription.split("").slice(0, 200)}
          </p>
        </div>
        <div className="flex flex-col items-center my-3">
          <Link to={`/category/${strCategory}/foods`}>
            <button className="btn bg-black hover:bg-black text-white hover:text-white rounded-full bg capitalize px-6 shadow-xl border-none ">
              view items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
