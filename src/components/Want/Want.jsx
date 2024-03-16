import Preparing from "../Prepare/Preparing";
import Wants from "../Wants/Wants";
const Want = ({ wantCook, handlePrepearing, prepearing }) => {
    return (
        <div className="w-[50%]">
            <h1 className="text-xl font-bold">Want To Cook : {wantCook.length}</h1>
            <div className="border-dashed border-2 my-3"></div>
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
                wantCook.map((want, i) => <Wants wantCook={want} i={i} handlePrepearing={handlePrepearing}> </Wants>)
            }
            <div>
                <h1 className="text-xl font-bold">Currently Cooking {prepearing.length}</h1>
                <div className="border-dashed border-2 my-3"></div>                
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Time</th>
                            <th className="text-center">Calories</th>
                        </tr>
                    </thead>

                </table>
            </div>
            {
                    prepearing.map((prepare,idx) => <Preparing prepare={prepare} idx={idx}></Preparing>)
                }
        </div>


    );
};

export default Want;