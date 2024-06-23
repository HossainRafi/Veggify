import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";

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
      <div>
        {items.length > 0 ? (
          items
            .slice(0, 4)
            .map((item, index) => <Card key={item._id} item={item} />)
        ) : (
          <p>Loading........</p>
        )}
      </div>
    </div>
  );
}
