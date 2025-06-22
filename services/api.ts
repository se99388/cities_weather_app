import { CitiesData, CurrentWeather } from "@/types";
import data from "./data.json";

const fetchData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json();
};

//mock an api request
export const getCitiesData = () => {
  const citiesData = data.cities;
  return citiesData as unknown as CitiesData;
};

export const getCityCurrentWeather = (city: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=3fc69c928ff34d1faea104519252206&q=${city}&aqi=no`;
  return fetchData<CurrentWeather>(url);
};
