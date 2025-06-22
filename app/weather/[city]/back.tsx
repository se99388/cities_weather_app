import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import React from "react";

function Back() {
  return (
    <Link href={"/"} className="w-fit flex items-center gap-2 group">
      <FaArrowAltCircleLeft className="text-3xl group-hover:text-gray-700" />
      <span className="hidden group-hover:inline">Back to home</span>
    </Link>
  );
}

export default Back;
