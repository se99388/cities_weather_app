"use client";
import { CitiesData, SortBy } from "@/types";
import * as R from "ramda";
import React, { useMemo } from "react";
import { useFilterContext } from "../../_filter_provider";
import { filterByContinent, filterByName, sortBy as sortByFn } from "../logic";
import CityCard from "./city-card";

type Props = {
  citiesData: CitiesData;
  sortBy: SortBy;
};
function Cities({ citiesData, sortBy }: Props) {
  const { name, continent } = useFilterContext();

  const processedCitiesData = useMemo(
    () =>
      R.pipe(
        filterByName(name),
        filterByContinent(continent),
        sortByFn(sortBy)
      )(citiesData),
    [citiesData, name, continent, sortBy]
  );

  if (processedCitiesData.length === 0) {
    return <div className="text-center text-2xl">No Cities Found</div>;
  }

  return (
    <div className="flex gap-4 flex-wrap">
      {processedCitiesData.map((c) => (
        <CityCard key={`${c.name}_${c.country}`} cityData={c} />
      ))}
    </div>
  );
}

export default Cities;
