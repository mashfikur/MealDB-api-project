import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";


const Categories = () => {

    const {categories}=useLoaderData()

    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
                {
                    categories.map((category) => <CategoryCard key={category.idCategory} category={category} ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;