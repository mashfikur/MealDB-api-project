import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Authentication/AuthProvider";
import FavouriteList from "./FavouriteList";

const Cart = () => {
  const [favourites, setFavourites] = useState([]);
  const axiosCustom = useAxios();
  const { currentUser } = useContext(AuthContext);
  const [dataLoading, setDataLoding] = useState(true);

  useEffect(() => {
    setDataLoding(true);
    axiosCustom
      .get(`/api/v1/get-favourite?id=${currentUser?.uid}`)
      .then((res) => {
        if (res.data) {
          setFavourites(res.data);
          setDataLoding(false);
        }
      });

    //eslint-disable-next-line
  }, [currentUser]);

  return (
    <div className="min-h-screen">
      <h3 className="text-3xl my-10 font-semibold text-center">
        Favourite foods
      </h3>

      <div className="my-12 container mx-auto">

        {dataLoading ? (
          <div>
            {" "}
            <div className="flex flex-col w-full items-center">
              <span className="loading loading-spinner text-warning loading-lg"></span>
            </div>{" "}
          </div>
        ) : favourites.length === 0 ? (
          <div className="text-center font-bold text-gray-400 text-5xl">
            <h3> 💔 No Favourites Available</h3>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Food</th>
                  <th>Name</th>
                  <th>Category</th>
                </tr>
              </thead>

              <tbody>
                {favourites.map((data,idx) => (
                  <FavouriteList key={data.mealID} number={idx} food={data}></FavouriteList>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
