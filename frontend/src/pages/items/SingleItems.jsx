import { useLoaderData } from "react-router-dom";

export const SingleItems = () => {
  const item = useLoaderData();

  // calculating total time
  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };
  let prepTimeMinutes = extractNumber(item?.more[0].prep_time);
  let cookTimeMinutes = extractNumber(item?.more[0].cook_time);
  const totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;

  return (
    <section className="min-h-dvh md:flex justify-center items-center">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              className="md:max-w-[95%] w-full md:h-[570px] md:rounded-xl mx-auto"
            />
          </picture>

          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary text-center">
              {item.name}
            </h1>
            <p className="mt-6">
              An easy and quick dish, perfect for any meal. This classic dish
              combines eggs cooked to perfection, optionally filled with your
              choice of cheese, vegetables, or meats
            </p>

            {/* preparation time section */}
            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2">Preparation Time</h3>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className="pl-3">
                  <p>
                    <span>Preparation Time:</span>{" "}
                    <span>{item?.more[0].prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 my-3">
                  <p>
                    <span>Cooking Time:</span>{" "}
                    <span>{item?.more[0].cook_time}</span>
                  </p>
                </li>
                <li className="pl-3">
                  <p>
                    <span>Total Time:</span>{" "}
                    <span>{totalTimeMinutes} minutes</span>
                  </p>
                </li>
              </ul>
            </article>

            {/* ingredients section */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {
                  item?.ingredients.map((ingredient, index)=>(
                    <li key={index} className="pl-4 mt-2">
                      <span>{ingredient?.name}:</span>
                      <span> {ingredient?.quantity}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
