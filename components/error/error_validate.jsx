import React from "react";
import { XIcon } from "@heroicons/react/solid";

export default function InCurrect({ args }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2 font-display text-xs md:text-sm text-red-400">
        {args}
      </p>{" "}
      <XIcon className="w-3 h-3  bg-red-300 rounded-full "></XIcon>
    </div>
  );
}
