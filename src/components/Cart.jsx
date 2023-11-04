import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Authentication/AuthProvider";
import FavouriteList from "./FavouriteList";

const Cart = () => {
  const [favourites, setFavourites] = useState([]);
  const axiosCustom = useAxios();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    axiosCustom
      .get(`/api/v1/get-favourite?id=${currentUser?.uid}`)
      .then((res) => {
        if (res.data) {
          setFavourites(res.data);
        }
      });

    //eslint-disable-next-line
  }, [currentUser]);

  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">
        Favourite foods :{favourites.length}{" "}
      </h3>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((data) => (
                <FavouriteList key={data.mealID} food={data} ></FavouriteList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
