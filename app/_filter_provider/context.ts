"use client";
import { createContext, useContext } from "react";

export type ContextFilterType = {
  name: string;
  continent: string;
};

export type ActionsFilterType = {
  setName: (name: string) => void;
  setContinent: (continent: string) => void;
};

export const ContextFilter = createContext({} as ContextFilterType);
export const ActionsFilter = createContext({} as ActionsFilterType);

export const useFilterContext = () => useContext(ContextFilter);
export const useFilterActions = () => useContext(ActionsFilter);
