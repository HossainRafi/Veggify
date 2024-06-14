import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export const Hero = () => {
  return (
    <>
      <div className="px-5 xl:px-10 md:w-1/2 mb-10">
        {/* hero text */}
        <h1 className="mt-6 mb-10 text-4xl xl:text-5xl text-center font-bold leading-normal xl:leading-relaxed text-[#2A3342]">
          A blog template made for food{" "}
          <span className="text-orange-500 italic">influencers</span>
        </h1>

        {/* hero search */}
        <form
          action="/search"
          className="bg-white p-4 rounded relative flex items-center"
        >
          <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-500" />
          <input
            id="search"
            name="query"
            type="search"
            required
            placeholder="Search for a recipe"
            className="outline-none w-full placeholder:text-neutral-500"
          />
        </form>
      </div>
    </>
  );
};
