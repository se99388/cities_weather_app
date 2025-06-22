import { getCityCurrentWeather } from "@/services/api";
import Current from "./current";
import Back from "./back";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  return { title: `${params.city} | Weather page` };
}

export default async function WeatherPage(props: Props) {
  const { city } = await props.params;

  const currentWeather = await getCityCurrentWeather(city);
  return (
    <div className="">
      <Back />
      <Current currentWeather={currentWeather} />
    </div>
  );
}
