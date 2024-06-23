import { Hero } from "../../components/Hero";
import { CategoryWrapper } from "../category/CategoryWrapper";
import { AboutSection } from "./AboutSection";
import { FeaturedSection } from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";
import { NewsLetter } from "./NewsLetter";
import { Sponsor } from "./Sponsor";

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
        <NewsLetter />
        <AboutSection />
        <Sponsor />
      </div>
    </>
  );
};

export default Home;
