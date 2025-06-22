"use client";
import React, { useMemo } from "react";
import {
  useFilterActions,
  useFilterContext,
} from "../../_filter_provider/context";
import { CitiesData } from "@/types";
import { Select } from "@/ui";

type Props = {
  citiesData: CitiesData;
};

function SearchContinent({ citiesData }: Props) {
  const { continent } = useFilterContext();
  const { setContinent } = useFilterActions();

  const options = useMemo(() => {
    const continents = [...new Set<string>(citiesData.map((c) => c.continent))];
    return [
      { value: "", label: "--No Continent--" },
      ...continents.map((c) => ({ value: c, label: c })),
    ];
  }, [citiesData]);

  return (
    <div className="flex flex-col gap-2 w-full md:w-[300px]">
      <label>Continent</label>
      <Select
        onChange={(value) => {
          setContinent(value);
        }}
        options={options}
        value={continent}
      />
    </div>
  );
}

export default SearchContinent;
