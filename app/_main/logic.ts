import { CitiesData, CityData, SortBy } from "@/types";
import * as R from "ramda";

export const filterByName = (name: string) => (citiesData: CitiesData) => {
  if (!name) {
    return citiesData;
  }
  const regexName = new RegExp(name, "ig");

  return citiesData.filter(
    (c) => c.name.match(regexName) || c.country.match(regexName)
  );
};

export const filterByContinent =
  (continent: string) => (citiesData: CitiesData) => {
    if (!continent) {
      return citiesData;
    }
    return citiesData.filter(
      (c) => c.continent.toLowerCase() === continent.toLowerCase()
    );
  };

const haversine =
  (selectedCoords: { lat: number; lng: number }) =>
  (coords: { lat: number; lng: number }) => {
    const R = 6371;
    // radius in km
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const φ1 = toRad(selectedCoords.lat);
    const φ2 = toRad(coords.lat);
    const Δφ = toRad(coords.lat - selectedCoords.lat);
    const Δλ = toRad(coords.lng - selectedCoords.lng);

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // distance in km
  };

export const sortBy = (sort: SortBy) => (citiesData: CitiesData) => {
  if (sort.type === "name") {
    const byNameAsc = R.sort<CityData>(R.ascend(R.prop("name")));
    return byNameAsc(citiesData);
  }

  const city = sort.from;
  const cityData = citiesData.find((c) => c.name === city);
  if (!cityData) {
    return citiesData;
  }

  const haversineCityFn = haversine(cityData.coords);
  const byDistanceAsc = R.sortBy<CityData>((c) => haversineCityFn(c.coords));
  return byDistanceAsc(citiesData);
};
