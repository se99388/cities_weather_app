"use client";
import { CurrentWeather } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import Temp from "./temp";

type Props = {
  currentWeather: CurrentWeather;
};
function Current({ currentWeather }: Props) {
  const [metricsUnit, setMetricsUnit] = useState(true);
  const { current, location } = currentWeather;
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">{location.name}</h1>
        <p className="text-lg">{location.country}</p>
        <p className="text-lg">{location.localtime}</p>
        <div className="font-bold text-2xl">Current weather:</div>
        <div className="flex gap-2 items-center">
          <div className="text-3xl font-bold min-w-[100px] ">
            {metricsUnit ? `${current.temp_c} °C` : `${current.temp_f} °F`}
          </div>
          <Temp metricsUnit={metricsUnit} setMetricsUnit={setMetricsUnit} />
        </div>
        <div className="text-lg">{current.condition.text}</div>
        <Image
          src={`https:${current.condition.icon}`}
          alt="icon"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default Current;
