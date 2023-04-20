import React from "react";
import { initState } from "./Calculator";
import { isEmpty } from "./utils/isEmpty";

type DisplayProps = {
  state: typeof initState;
};

function formater(v: string): string {
  if (v === "") return "";

  return new Intl.NumberFormat("pt-br", {
    maximumFractionDigits: 12,
  }).format(parseFloat(v));
}

const Display = ({ state: { curr, prev, op } }: DisplayProps) => {
  return (
    <div className="mb-2 flex h-24 flex-col items-end justify-between bg-black py-2 text-2xl text-white">
      <p>{`${formater(prev)} ${op}`}</p>
      <p>{formater(curr) || "0"}</p>
    </div>
  );
};

export default Display;
