import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import React from "react";

function Back() {
  return (
    <Link href={"/"}>
      <FaArrowAltCircleLeft className="text-3xl" />
    </Link>
  );
}

export default Back;
