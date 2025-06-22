import { CityData } from "@/types";
import Link from "next/link";
import cx from "clsx";
import React, { useState } from "react";

type Props = {
  cityData: CityData;
};
function CityCard({ cityData }: Props) {
  const [loading, setLoading] = useState(false);

  const { name, country, description, image } = cityData;
  return (
    <Link
      onClick={() => {
        setLoading(true);
      }}
      href={`/weather/${name}`}
      className="relative h-[200px] w-full sm:w-[180px] rounded-md text-white px-3 py-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[20px] font-bold"> {name}</div>
      <div className="text-[16px]"> {country}</div>
      <div className="text-[12px] mt-3 line-clamp-6">{description}</div>
      <div
        className={cx(
          "absolute bottom-0 left-0 bg-blue-400 transition-all duration-300 ease-in-out p-1 rounded-tr-md",
          loading ? "translate-y-[0%]" : "translate-y-[100%]"
        )}
      >
        Loading...
      </div>
    </Link>
  );
}

export default CityCard;
