import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const details=useLoaderData()
    const foodDetail=details.meals[0]
    const {strMeal,strMealThumb,strCategory,strArea,strTags,strInstructions}=foodDetail

    return (
        <div>
            <div className="my-4" >
              <h3 className="text-center font-bold text-5xl drop-shadow-lg mb-12">{strMeal} </h3> 
              <div className="flex  ">
                
                <div className=" w-1/2 ">
                    <img className="w-[70%] mx-auto border-4 border-warning rounded-lg" src={strMealThumb} alt="food-image" />
                </div>

                <div className=" w-1/2">
                    <div className="text-2xl border-t-4 border-b-4  border-warning font-light py-4 " >
                    <h3>Category : {strCategory} </h3>
                    <h3>Area : {strArea} </h3>    
                    </div>
            
                    <p className="font-semibold  my-6" >{strInstructions} </p>

                    <h3 className="text-gray-400 font-semibold space-x-2" > {strTags?strTags.split(',').map((str,idx)=><span key={idx} >#{str}</span>):''} </h3>
                    <div>
                    <p className="font-semibold" >Recipie : </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BZ0QER_0ZWI?si=TylL5uBWYURcBS0M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    
                </div>
                
                </div> 
            </div>
            
        </div>
    );
};

export default FoodDetails;