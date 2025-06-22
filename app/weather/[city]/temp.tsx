import React from "react";

type Props = {
  setMetricsUnit: React.Dispatch<React.SetStateAction<boolean>>;
  metricsUnit: boolean;
};
function Temp({ setMetricsUnit, metricsUnit }: Props) {
  return (
    <div
      className="flex mt-auto cursor-pointer"
      onClick={() => {
        setMetricsUnit((prevUnit) => !prevUnit);
      }}
    >
      <label>Switch to:</label>
      <div>{metricsUnit ? "°F" : "°C"}</div>
    </div>
  );
}

export default Temp;
