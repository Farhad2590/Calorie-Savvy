import Preparing from "../Prepare/Preparing";
import Wants from "../Wants/Wants";
const Want = ({ wantCook, handlePrepearing, prepearing }) => {
    return (
        <div className="w-[40%] card bg-base-100 shadow-xl">
            <div className="p-3">
                <h1 className="text-base font-bold">Want To Cook : {wantCook.length}</h1>
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
            </div>

            <div className="p-3">
                <div>
                    <h1 className="text-base font-bold">Currently Cooking {prepearing.length}</h1>
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
                    prepearing.map((prepare, idx) => <Preparing prepare={prepare} idx={idx}></Preparing>)
                }
            </div>
        </div>


    );
};

export default Want;