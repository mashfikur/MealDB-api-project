import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SingleCategory = () => {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["single-category"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="mb-12 mt-4 text-center text-4xl lg:text-7xl underline lg:text-end"> {id} </h3>

      <div>
        {isPending ? (
          "hello"
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center  gap-10 px-6">
            {data.meals.map((food, idx) => (
              <div key={idx} className="space-y-3">
                <img
                  className="w-full rounded-xl"
                  src={food.strMealThumb}
                  alt="food-thumbnail"
                />
                <h3 className="py-4 text-2xl font-semibold">
                  {" "}
                  {food.strMeal}{" "}
                </h3>
                <Link to={`/foods/${food.idMeal}`}>
                  <button className="btn text-center mx-auto  btn-warning btn-sm rounded-full ">
                    view details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
