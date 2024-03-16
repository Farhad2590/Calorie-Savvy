const Wants = ({ wantCook,i,handlePrepearing }) => {
    const { recipe_id,recipe_name, preparing_time, calories, } = wantCook
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    <tr>
                        <td className="">{i+1}</td>
                        <td className="text-center">{recipe_name}</td>
                        <td className="text-center">{preparing_time}</td>
                        <td className="text-center">{calories}</td>
                        <td className=""><button onClick={() => {handlePrepearing (wantCook,recipe_id)}} className="btn bg-green-400 rounded-full">Prepearing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Wants;