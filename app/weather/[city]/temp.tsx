import React from "react";

type Props = {
  setMetricsUnit: React.Dispatch<React.SetStateAction<boolean>>;
  metricsUnit: boolean;
};
function Temp({ setMetricsUnit, metricsUnit }: Props) {
  return (
    <div
      className="flex mt-auto cursor-pointer group"
      onClick={() => {
        setMetricsUnit((prevUnit) => !prevUnit);
      }}
    >
      <label>Switch to:</label>
      <div className="group-hover:font-bold">{metricsUnit ? "°F" : "°C"}</div>
    </div>
  );
}

export default Temp;
