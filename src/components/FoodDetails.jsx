import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const details=useLoaderData()
    const foodDetail=details.meals[0]
    const {strMeal,strMealThumb,strCategory,strArea,strTags,strInstructions,strYoutube}=foodDetail

    return (
        <div>
            <div className="my-4" >
              <h3 className="text-center font-bold text-5xl drop-shadow-lg mb-12">{strMeal} </h3> 
              <div className="flex items-center  ">
                
                <div className=" w-1/2 ">
                    <img className="w-[70%] mx-auto border-4 border-warning rounded-lg" src={strMealThumb} alt="food-image" />
                </div>

                <div className=" w-1/2 text-center">
                    <div className="text-2xl border-t-4 border-b-4  border-warning font-light py-2 " >
                    <h3>Category : {strCategory} </h3>
                    <h3>Area : {strArea} </h3>  
                    <h3 className="text-gray-400 text-base font-semibold space-x-2" > {strTags?strTags.split(',').map((str,idx)=><span key={idx} >#{str}</span>):''} </h3>  
                    </div>
                    <div className="font-semibold border-b-4  border-warning my-2">
                        <p>{strInstructions} </p>
                    </div>


                    <div>

                    <iframe className="mx-auto" width="560" height="315" src={strYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                    
                </div>
                
                </div> 
            </div>
            
        </div>
    );
};

export default FoodDetails;