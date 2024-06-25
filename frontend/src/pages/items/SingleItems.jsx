import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const SingleItems = () => {
  const item = useLoaderData();

  // load from top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // calculating total time
  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };

  // extract number
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
              <ul className="list-disc marker:text-orange-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name}:</span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* instruction section */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Instruction</h3>
              <ol className="mt-4 ml-6 text-secondary marker:align-middle">
                <li className="mb-2">
                  1. Cook spaghetti in boiling water until al dente
                </li>
                <li className="mb-2">
                  2. In a separate pan, fry bacon until crisp
                </li>
                <li className="mb-2">
                  3. Beat eggs and mix in grated Parmesan cheese
                </li>
                <li className="mb-2">4. Drain spaghetti and mix with bacon</li>
                <li className="mb-2">
                  5. Pour egg and cheese mixture over spaghetti and toss until
                  coated
                </li>
                <li>6. Serve immediately with a sprinkle of black pepper</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
