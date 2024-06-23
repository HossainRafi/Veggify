import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export default function LatestRecipe() {
  const [items, setItems] = useState([]);

  // getting data
  useEffect(() => {
    const getLatestItems = async () => {
      const response = await axios.get("http://localhost:5000/api/all-items");
      setItems(response.data);
    };
    getLatestItems();
  }, []);

  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest Recipes
      </h2>

      {/* get all items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.length > 0 ? (
          items
            .slice(0, 8)
            .map((item, index) => <Card key={item._id} item={item} />)
        ) : (
          <p>Loading........</p>
        )}
      </div>

      <div className="sm:w-64 mx-auto mt-16">
        <Link to="/recipies">
          <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
