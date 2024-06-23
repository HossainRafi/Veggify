import { useLoaderData } from "react-router-dom";

export const SingleItems = () => {
  const item = useLoaderData();

  return (
    <section className="min-h-dvh md:flex justify-center items-center">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img src={item.thumbnail_image} className="md:max-w-[95%] w-full md:h-[570px] md:rounded-xl mx-auto" />
          </picture>

          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary text-center">{item.name}</h1>
            <p className="mt-6">An easy and quick dish, perfect for any meal. This classic dish combines eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats</p>
          </div>
        </div>
      </article>
    </section>
  );
};
