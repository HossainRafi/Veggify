import gif from "../../assets/comingSoon.gif";

export const Resources = () => {

  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed mb-10 text-center">
        Resources
      </h1>

      <div>
        <img src={gif}  className="w-full mx-auto h-[700px]"/>
      </div>
    </section>
  );
};
