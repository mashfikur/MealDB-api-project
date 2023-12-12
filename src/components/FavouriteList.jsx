import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FavouriteList = ({ food, number }) => {
  const { mealID, name, image, category, area } = food;

  return (
    <tr className="text-base font-semibold">
      <th> {number + 1} </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-warning badge-sm">{area}</span>
      </td>
      <td>{category}</td>
      <th>
        <Link to={`/foods/${mealID}`}>
          <button className="btn btn-primary rounded-full text-base btn-sm">details</button>
        </Link>
      </th>
    </tr>
  );
};

FavouriteList.propTypes = {
  food: PropTypes.object,
  number: PropTypes.number,
};

export default FavouriteList;
