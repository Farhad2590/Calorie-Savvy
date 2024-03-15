import { useEffect, useState } from "react";

const Card = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },[])
    return (
        <div>
           <h1>Cards Data : {recipe.length}</h1>
        </div>
    );
};

export default Card;