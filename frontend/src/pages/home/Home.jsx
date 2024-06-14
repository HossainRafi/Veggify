import { Hero } from "../../components/Hero";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
