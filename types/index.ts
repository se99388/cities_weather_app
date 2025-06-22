export type CityData = {
  name: string;
  continent: string;
  active: boolean;
  country: string;
  description: string;
  image: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export type CitiesData = Array<CityData>;

export type SortBy = { type: "name" | "distance"; from?: string };

export type CurrentWeather = {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: number;
    temp_c: number;
    temp_f: number;
    // is_day: 1,
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    // wind_mph: 15.4,
    // wind_kph: 24.8,
    // wind_degree: 239,
    // wind_dir: 'WSW',
    // pressure_mb: 1014,
    // pressure_in: 29.94,
    // precip_mm: 0,
    // precip_in: 0,
    // humidity: 53,
    // cloud: 25,
    // feelslike_c: 24.1,
    // feelslike_f: 75.4,
    // windchill_c: 26.1,
    // windchill_f: 79,
    // heatindex_c: 25.8,
    // heatindex_f: 78.4,
    // dewpoint_c: 9.1,
    // dewpoint_f: 48.4,
    // vis_km: 10,
    // vis_miles: 6,
    // uv: 7,
    // gust_mph: 17.8,
    // gust_kph: 28.6
  };
};
