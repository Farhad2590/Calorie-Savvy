const Wants = ({ wantCook, i, handlePrepearing }) => {
    const { recipe_id, recipe_name, preparing_time, calories, } = wantCook
    return (
        <div className="overflow-x-auto bg-base-300 mb-5 rounded-lg">
            <table className="table">
                <tbody>
                    <tr className="text-base">
                        <td className="">{i + 1}</td>
                        <td className="text-center">{recipe_name}</td>
                        <td className="text-center">{preparing_time}</td>
                        <td className="text-center">{calories}</td>
                        <td className=""><button onClick={() => {
                            handlePrepearing(wantCook);
    
                        }}
                            className="btn bg-green-400 rounded-full">Prepearing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Wants;