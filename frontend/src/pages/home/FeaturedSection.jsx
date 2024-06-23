import Featuredimg from "../../assets/featured.webp";

export const FeaturedSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative">
        <div className="absolute top-4 right-4 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider">
          Featured Recipe
        </div>
        <img src={Featuredimg} className="rounded-lg"/>
      </div>
    </div>
  );
};
