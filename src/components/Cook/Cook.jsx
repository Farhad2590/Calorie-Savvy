const Cook = ({ cook }) => {
    console.log(cook);
    const { recipe_name, preparing_time, calories } = cook;
    return (
        <tr>
            <td></td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};

export default Cook;
