import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <div className="flex items-center justify-between lg:px-3 xl:px-0 flex-col mt-3 lg:flex-row">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-neutral rounded-full"
          >
            {" "}
            <FaArrowLeftLong></FaArrowLeftLong> Go Back
          </button>
        </div>
        <h3 className="mb-12 mt-4 text-center text-4xl text-white lg:text-7xl underline lg:text-end">
          {" "}
          {id}{" "}
        </h3>
      </div>

      <div>
        {isPending ? (
          "hello"
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center  gap-10 px-6 pb-10">
            {data.meals.map((food, idx) => (
              <div key={idx} className="space-y-3 h-[30rem] ">
                <img
                  className="w-full rounded-xl"
                  src={food.strMealThumb}
                  alt="food-thumbnail"
                />
                <h3 className="py-4 text-2xl text-white font-semibold">
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
