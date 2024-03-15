const Banner = () => {
    return (
        <div
            className="bg-header bg-no-repeat bg-cover bg-center rounded-2xl mt-12">
            <div className="flex flex-col items-center  py-28 text-white">
                <h1 className="text-3xl text-center font-extrabold mb-5">
                    Crafting Wellness on a Plate:
                </h1>
                <h1 className="text-3xl text-center font-extrabold mb-5">
                    Calorie-Smart Cooking Adventure
                </h1>
                <p className="w-[750px] text-center">Embark on a culinary voyage blending wellness with flavor. Discover calorie-smart techniques, indulge in vibrant ingredients, and craft nourishing dishes that redefine healthy eating.</p>
                <div className="flex mt-5 gap-5">
                    <button className="btn bg-green-400 border-none rounded-full">Explore Now</button>
                    <button className="btn text-white rounded-full bg-transparent">Our Feedback</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;