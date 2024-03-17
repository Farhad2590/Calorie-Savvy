const Preparing = ({prepare,idx}) => {
    console.log(prepare);
    const { recipe_name, preparing_time, calories } = prepare;
    console.log(prepare.recipe_name);
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="">{idx}</td>
                        <td className="text-center">{recipe_name}</td>
                        <td className="text-center">{preparing_time}</td>
                        <td className="text-center">{calories}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Preparing;