import Main from "./_main";
import { getCitiesData } from "@/services/api";
export default async function Home() {
  const citiesData = await getCitiesData();
  return <Main citiesData={citiesData} />;
}
