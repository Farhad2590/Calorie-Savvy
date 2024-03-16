import { useEffect, useState } from "react";
import Cards from '../Cards/Cards'


const Card = ({handleCooking}) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="w-[50%] grid grid-cols-2 gap-5 ">
            {
                recipe.map(recipe =>
                    <Cards
                        key={recipe.recipe_id}
                        recipe={recipe}
                        handleCooking={handleCooking}>
                    </Cards>)
            }
        </div>
    );
};


export default Card;