import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CategoryWrapper } from "./../category/CategoryWrapper";
import { Card } from "../../components/Card";

export const Recipies = () => {
  const [items, setItems] = useState([]);

  // getting data
  useEffect(() => {
    const getLatestItems = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_LINK}/api/all-items`
      );
      setItems(response.data);
    };
    getLatestItems();
  }, []);

  // load from top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 py-20 lg:px-12">
      <h1 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed mb-10 text-center">
        All Recipes
      </h1>
      <CategoryWrapper />

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {
          items.map((item)=>(
            <Card key={item._id} item={item}/>
          ))
        }
      </ul>
    </div>
  );
};
