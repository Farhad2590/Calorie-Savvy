import { IoMdTimer } from "react-icons/io";
import { GiFireZone } from "react-icons/gi";
const Cards = () => {
    return (
        <div>
             <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="../../../api-images/One.png" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-base font-bold">Spaghetti Bolognese</h2>
                        <p>Classic Italian pasta dish with savory meat sauce.</p>
                        <h2 className="text-base font-bold">Ingredients: 6</h2>
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                        <div className="border-dashed border-2"></div>
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center">
                                <IoMdTimer className="text-xl"></IoMdTimer>
                                <p>30 miniutes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <GiFireZone className="text-xl"></GiFireZone>
                                <p>600 calories</p>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn bg-green-400">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;