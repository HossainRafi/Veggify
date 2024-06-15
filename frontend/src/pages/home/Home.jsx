import { Hero } from "../../components/Hero";
import { CategoryWrapper } from "../category/CategoryWrapper";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <Hero />
          <CategoryWrapper />
        </div>
      </div>
    </>
  );
};

export default Home;
