import { IoMdTimer } from "react-icons/io";
import { GiFireZone } from "react-icons/gi";

const Cards = ({recipe,handleCooking}) => {
    // console.log(recipe.recipe);
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className=''>
            <div className='card bg-base-100 shadow-xl'>
                <figure className='px-5 pt-5'>
                    <img src={recipe_image} alt="" className='' />
                </figure>
                <div className="card-body ">
                    <h2 className="text-base font-bold">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className="border-dashed border-2 my-3"></div>
                    <h2 className="text-base font-bold">Ingredients: {ingredients.length}</h2>
                    <p>
                        {
                            ingredients.map((items, idx) => <span key={idx}><li>{items}</li></span>)
                        }
                    </p>
                    <div className="border-dashed border-2 my-3"></div>
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <IoMdTimer className="text-xl"></IoMdTimer>
                            <p>{preparing_time}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <GiFireZone className="text-xl"></GiFireZone>
                            <p>{calories}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={ () => {handleCooking(recipe)}} className="btn bg-green-400 rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

