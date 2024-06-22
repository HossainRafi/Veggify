import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

export const Search = () => {
  const searchText = useParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);








  

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>

      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-500" />
        <input
          id="search"
          name="query"
          type="search"
          required
          placeholder="Search for a recipe"
          className="outline-none w-full placeholder:text-neutral-500"
        />
      </div>

      <ul></ul>
    </div>
  );
};
