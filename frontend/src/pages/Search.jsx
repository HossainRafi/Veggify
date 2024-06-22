import React, { useEffect } from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Search = () => {
  const searchText = useParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  // getting search data
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/items`, {
          params: { q: query },
        });
        setResults(response.data);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  // search input handle function
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>

      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-500" />
        <input
          onChange={handleSearch}
          id="search"
          name="query"
          type="search"
          required
          placeholder="Search for a recipe"
          className="outline-none w-full placeholder:text-neutral-500"
        />
      </div>
    </div>
  );
};
