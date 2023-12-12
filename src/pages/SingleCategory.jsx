import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className="container mx-auto min-h-screen">
      <h3>Category</h3>

      <div>
        {isPending ? (
          "hello"
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {data.meals.map((food, idx) => (
              <div key={idx}>
                <img src={food.strMealThumb} alt="food-thumbnail" />
                <h3> {food.strMeal} </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
