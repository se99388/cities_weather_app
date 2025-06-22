"use client";
import { CitiesData, SortBy } from "@/types";
import Cities from "./cities";
import Header from "./header";
import { useState } from "react";

type Props = {
  citiesData: CitiesData;
};
function Main({ citiesData }: Props) {
  const [sortBy, setSortBy] = useState<SortBy>({ type: "name" });
  return (
    <>
      <Header citiesData={citiesData} sortBy={sortBy} setSortBy={setSortBy} />
      <Cities citiesData={citiesData} sortBy={sortBy} />
    </>
  );
}

export default Main;
