import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div>
            <div className="flex justify-between bg-base-100 mt-5 items-center">
                <div className="">
                    <h1 className="text-2xl text-green-400 font-bold">Calorie-Savvy</h1>
                </div>

                <div className="flex list-none gap-5">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </div>

                <div className="flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input bg-slate-200 rounded-full border-none w-16 md:w-auto" />
                    </div>
                    <div className="bg-green-400 p-2 rounded-full">
                        <span><CgProfile className="text-3xl"></CgProfile></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;