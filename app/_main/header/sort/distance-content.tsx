import React, { useMemo } from "react";
import { CitiesData } from "@/types";
import { Select } from "@/ui";

type Props = {
  citiesData: CitiesData;
  value?: string;
  onChange: (value: string) => void;
};
function DistanceContent({ citiesData, value = "", onChange }: Props) {
  const options = useMemo(() => {
    const name = [...new Set<string>(citiesData.map((c) => c.name))];
    return name.map((c) => ({ value: c, label: c }));
  }, [citiesData]);

  return (
    <Select
      onChange={onChange}
      options={options}
      placeholder="Select a city"
      value={value}
    />
  );
}

export default DistanceContent;
