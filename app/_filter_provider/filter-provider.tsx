"use client";
import { useState } from "react";
import { ActionsFilter, ContextFilter } from "./context";

type Props = {
  children: React.ReactNode;
};
const FilterProvider = ({ children }: Props) => {
  const [name, setName] = useState<string>("");
  const [continent, setContinent] = useState<string>("");

  return (
    <ContextFilter value={{ name, continent }}>
      <ActionsFilter value={{ setName, setContinent }}>
        {children}
      </ActionsFilter>
    </ContextFilter>
  );
};

export default FilterProvider;
