import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

type Props = {
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  value: string;
  placeholder?: string;
};

function Select({ onChange, options, value = "", placeholder }: Props) {
  return (
    <div className="relative">
      <select
        className="form-el appearance-none"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        required
      >
        {placeholder && (
          <option key={"placeholder"} value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      <RiArrowDownSFill className="absolute text-2xl top-1/2 -translate-y-1/2 right-[10px]" />
    </div>
  );
}

export default Select;
