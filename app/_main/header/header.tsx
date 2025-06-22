import React, { Dispatch, SetStateAction } from "react";
import SearchCity from "./search-name";
import SearchContinent from "./search-continent";
import Sort from "./sort";
import { CitiesData, SortBy } from "@/types";

type Props = {
  citiesData: CitiesData;
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
};

function Header({ citiesData, sortBy, setSortBy }: Props) {
  return (
    <div className="flex gap-5 mb-10  flex-wrap">
      <SearchCity />
      <SearchContinent citiesData={citiesData} />
      <Sort citiesData={citiesData} sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}

export default Header;
