"use client";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useFilterActions, useFilterContext } from "../../_filter_provider";

function SearchName() {
  const { name } = useFilterContext();
  const { setName } = useFilterActions();

  return (
    <div className="flex flex-col gap-2 w-full md:w-[300px]">
      <label>Search</label>
      <div className="relative">
        <input
          className="form-el"
          placeholder="Type to search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <IoIosCloseCircle
          className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[20px] cursor-pointer hover:text-gray-600"
          onClick={() => setName("")}
        />
      </div>
    </div>
  );
}

export default SearchName;
