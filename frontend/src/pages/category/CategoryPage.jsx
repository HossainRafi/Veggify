import { useParams } from "react-router-dom";
import { CategoryWrapper } from "./CategoryWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";

export const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // get search results
  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_LINK}/api/categories/${category}`
        );
        setItems(response.data);
      } catch (error) {
        setError(error.message || "Error loading categories");
      }
    };
    fetchCategoryData();
  }, [category]);

  return (
    <div className="px6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>
      <CategoryWrapper />

      {/* search result list */}
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items && items.map((item) => <Card item={item} key={item._id} />)}
      </ul>
    </div>
  );
};
