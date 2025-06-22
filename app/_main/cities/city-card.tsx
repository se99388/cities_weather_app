import { CityData } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  cityData: CityData;
};
function CityCard({ cityData }: Props) {
  const { name, country, description, image } = cityData;
  return (
    <Link
      href={`/weather/${name}`}
      className="h-[200px] w-[180px] rounded-md text-white px-3 py-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[20px] font-bold"> {name}</div>
      <div className="text-[16px]"> {country}</div>
      <div className="text-[12px] mt-3 line-clamp-6">{description}</div>
    </Link>
  );
}

export default CityCard;
