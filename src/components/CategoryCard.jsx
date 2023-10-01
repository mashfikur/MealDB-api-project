import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <div className="border-[#FBBD23] border-4 rounded-md">
      <div className="card rounded-md h-[30rem] bg-base-100 shadow-lg hover:drop-shadow-2xl duration-500">
        <figure>
          <img className="w-[80%]" src={strCategoryThumb} alt="card" />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-2xl font-semibold uppercase underline text-">{strCategory}</h2>
          <p className="text-gray-400 font-semibold" >{strCategoryDescription.split("").slice(0, 200)}</p>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
