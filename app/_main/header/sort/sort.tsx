"use client";
import { CitiesData, SortBy } from "@/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import cx from "clsx";
import { Popover } from "@/ui";
import DistanceContent from "./distance-content";

type Props = {
  citiesData: CitiesData;
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
};

function Sort({ citiesData, sortBy, setSortBy }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <label>Sort by</label>
      <div className="flex gap-2 items-center mt-auto h-[32px]">
        <div
          onClick={() => setSortBy({ type: "name" })}
          className={cx("cursor-pointer", {
            underline: sortBy.type === "name",
          })}
        >
          Name
        </div>
        |
        <Popover
          content={
            <DistanceContent
              citiesData={citiesData}
              value={sortBy.from}
              onChange={(from: string) => {
                setSortBy({ type: "distance", from });
                setOpen(false);
              }}
            />
          }
          open={open}
          setOpen={setOpen}
          arrow={false}
          asChild
        >
          <div
            className={cx("cursor-pointer", {
              underline: sortBy.type === "distance",
            })}
          >
            Distance {sortBy.from && `(${sortBy.from})`}
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Sort;
