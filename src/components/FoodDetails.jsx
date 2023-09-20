import { Link, useLoaderData, useNavigate } from "react-router-dom";


const FoodDetails = () => {
    const details=useLoaderData()
    const foodDetail=details.meals[0]
    const {strMeal,strMealThumb,strCategory,strArea,strTags,strInstructions,strYoutube}=foodDetail
    console.log(strYoutube)

    const navigate=useNavigate()



    return (
        <div>
            <div className="my-4" >
                <div className=" flex items-center">
                <Link  >
                    <button onClick={()=>navigate(-1)} className="btn btn-neutral flex-0 " >go back</button>
                </Link>

              <h3 className="text-center font-bold text-5xl drop-shadow-lg mb-12 flex-1">{strMeal} </h3>                  
                </div>

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
                    <div className="font-semibold border-b-4  border-warning py-4">
                        <p>{strInstructions} </p>
                    </div>


                    <div>
                        <h3 className="text-2xl font-light mb-2">Demo</h3>
                        <iframe className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/mrjnQal3S1A?si=t-yOB8rfaDRNQi3x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                    
                </div>
                
                </div> 
            </div>
            
        </div>
    );
};

export default FoodDetails;