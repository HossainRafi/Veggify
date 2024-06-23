import { Hero } from "../../components/Hero";
import { CategoryWrapper } from "../category/CategoryWrapper";
import { FeaturedSection } from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <Hero />
          <CategoryWrapper />
        </div>

        {/* other components */}
        <FeaturedSection />
        <LatestRecipe />
      </div>
    </>
  );
};

export default Home;
