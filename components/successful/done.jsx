import React from "react";

export default function DoneMsg({args}) {
  return (
    <div className="flex animate-pulse cursor-pointer mb-6 items-center justify-center space-x-3 flex-row w-full h-11  rounded-lg bg-green-500">
      <Icon></Icon>
      <h1 className="text-sm font-light font-display text-gray-100 ">
        {args} 
      </h1>
    </div>
  );
}

function Icon(args) {
  return (
    <div>
      <svg
        {...args}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}