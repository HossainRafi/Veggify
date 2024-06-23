import Aboutimg from "../../assets/about-image.jpg";

export const AboutSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      {/* about text div */}
      <div className="text-start sm:w-1/2">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Foodie who loves to experiment with recipes
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos amet
          necessitatibus tempora provident vero nihil. <br /> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Saepe odio adipisci iusto ut
          obcaecati ad!
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 px-8 bg-btnColor text-white hover:bg-white hover:text-black w-full transition ease-in duration-200 text-center text-base font-semibold border hover:border-[#9c702a] focus:outline-none rounded-lg">
              View Recipe
            </button>
          </div>
        </div>
      </div>

      {/* about image div */}
      <div>
        <img src={Aboutimg} className="rounded-lg cursor-pointer" />
      </div>
    </div>
  );
};
