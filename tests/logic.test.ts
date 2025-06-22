import { SortBy } from "@/types";
import { filterByName, filterByContinent, sortBy } from "../app/_main/logic";

const citiesData = [
  {
    name: "Barcelona",
    continent: "Europe",
    active: true,
    country: "Spain",
    description:
      "Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia.",
    image: "https://picsum.photos/id/402/500/500",
    coords: {
      lat: 41.390205,
      lng: 2.154007,
    },
  },
  {
    name: "Tokyo",
    continent: "Asia",
    active: true,
    country: "Japan",
    description:
      "Tokyo is the capital and largest city of Japan. It is also one of the 47 prefectures of Japan.",
    image: "https://picsum.photos/id/401/500/500",
    coords: {
      lat: 35.689487,
      lng: 139.691711,
    },
  },
  {
    name: "New York City",
    continent: "North America",
    active: true,
    country: "United States",
    description:
      "New York City is the most populous city in the United States and is known for its iconic landmarks such as Times Square and the Statue of Liberty.",
    image: "https://picsum.photos/id/400/500/500",
    coords: {
      lat: 40.712776,
      lng: -74.005974,
    },
  },
  {
    name: "Sydney",
    continent: "Australia",
    active: true,
    country: "Australia",
    description:
      "Sydney is the capital city of the state of New South Wales, and the most populous city in Australia.",
    image: "https://picsum.photos/id/399/500/500",
    coords: {
      lat: -33.86882,
      lng: 151.20929,
    },
  },
  {
    name: "Rio de Janeiro",
    continent: "South America",
    active: true,
    country: "Brazil",
    description:
      "Rio de Janeiro is a city in Brazil and is known for its breathtaking landscapes and the famous Christ the Redeemer statue.",
    image: "https://picsum.photos/id/398/500/500",
    coords: {
      lat: -22.906847,
      lng: -43.172897,
    },
  },
  {
    name: "Cairo",
    continent: "Africa",
    active: true,
    country: "Egypt",
    description:
      "Cairo is the capital of Egypt and is known for its ancient monuments such as the Great Sphinx and the Pyramids of Giza.",
    image: "https://picsum.photos/id/397/500/500",
    coords: {
      lat: 30.044419,
      lng: 31.235712,
    },
  },
  {
    name: "Paris",
    continent: "Europe",
    active: true,
    country: "France",
    description:
      "Paris is the capital of France and is known for its famous landmarks such as the Eiffel Tower and the Louvre Museum.",
    image: "https://picsum.photos/id/396/500/500",
    coords: {
      lat: 48.856613,
      lng: 2.352222,
    },
  },
  {
    name: "Buenos Aires",
    continent: "South America",
    active: true,
    country: "Argentina",
    description:
      "Buenos Aires is the capital and largest city of Argentina and is known for its tango music and vibrant culture.",
    image: "https://picsum.photos/id/395/500/500",
    coords: {
      lat: -34.603722,
      lng: -58.381592,
    },
  },
  {
    name: "Rome",
    continent: "Europe",
    active: true,
    country: "Italy",
    description:
      "Rome is the capital of Italy and is known for its ancient history and iconic landmarks such as the Colosseum and the Vatican City.",
    image: "https://picsum.photos/id/394/500/500",
    coords: {
      lat: 41.902783,
      lng: 12.496366,
    },
  },
  {
    name: "Toronto",
    continent: "North America",
    active: true,
    country: "Canada",
    description:
      "Toronto is the capital city of the province of Ontario and is known for its diverse culture and iconic CN Tower.",
    image: "https://picsum.photos/id/393/500/500",
    coords: {
      lat: 43.65107,
      lng: -79.347015,
    },
  },
  {
    name: "Berlin",
    continent: "Europe",
    active: true,
    country: "Germany",
    description:
      "Berlin is the capital and largest city of Germany and is known for its rich history and vibrant art scene.",
    image: "https://picsum.photos/id/392/500/500",
    coords: {
      lat: 52.520008,
      lng: 13.404954,
    },
  },
  {
    name: "Cape Town",
    continent: "Africa",
    active: true,
    country: "South Africa",
    description:
      "Cape Town is a city in South Africa and is known for its stunning natural beauty and iconic Table Mountain.",
    image: "https://picsum.photos/id/391/500/500",
    coords: {
      lat: -33.92487,
      lng: 18.424055,
    },
  },
];
describe("filterByName", () => {
  it("should filter cities by name or country containing 'ba'", () => {
    const filteredCities = filterByName("ba")(citiesData);
    console.log("filteredCities", filteredCities);
    expect(filteredCities.length).toBe(1);
    expect(filteredCities[0].name).toBe("Barcelona");
  });
});

describe("filterByContinent", () => {
  it("should filter cities by continent 'Europe'", () => {
    const filteredCities = filterByContinent("Europe")(citiesData);
    expect(filteredCities.length).toBe(4);
    expect(filteredCities.map((city) => city.name)).toEqual([
      "Barcelona",
      "Paris",
      "Rome",
      "Berlin",
    ]);
  });
});

describe("Combined Filters", () => {
  it("should filter cities by name containing 'b' and continent 'Europe'", () => {
    const filteredByName = filterByName("b")(citiesData);
    const filteredByContinent = filterByContinent("Europe")(filteredByName);
    expect(filteredByContinent.length).toBe(2);
    expect(filteredByContinent.map((city) => city.name)).toEqual([
      "Barcelona",
      "Berlin",
    ]);
  });
});

describe("SortBy", () => {
  it("should sort cities by name in ascending order", () => {
    const sortedCities = sortBy({ type: "name" } as SortBy)(citiesData);
    expect(sortedCities.map((city) => city.name)).toEqual([
      "Barcelona",
      "Berlin",
      "Buenos Aires",
      "Cairo",
      "Cape Town",
      "New York City",
      "Paris",
      "Rio de Janeiro",
      "Rome",
      "Sydney",
      "Tokyo",
      "Toronto",
    ]);
  });
});

describe("Combined Filters and SortBy", () => {
  it("should filter cities by name containing 'b' and continent 'Europe', then sort by name", () => {
    const filteredByName = filterByName("b")(citiesData);
    const filteredByContinent = filterByContinent("Europe")(filteredByName);
    const sortedCities = sortBy({ type: "name" } as SortBy)(
      filteredByContinent
    );
    expect(sortedCities.map((city) => city.name)).toEqual([
      "Barcelona",
      "Berlin",
    ]);
  });
});
