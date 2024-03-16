import Wants from "../Wants/Wants";
const Want = ({ wantCook }) => {
    return (
        <div className="w-[50%]">
            <h1 className="text-xl font-bold">Want To Cook : {wantCook.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>

                </table>
            </div>
            {
                wantCook.map((want, i) => <Wants wantCook={want} i={i}></Wants>)
            }
        </div>
    );
};

export default Want;