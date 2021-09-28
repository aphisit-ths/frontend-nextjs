import React from "react";

export default function FoodReview() {
  return (
    <div className="flex flex-col w-screen h-screen" id="root">
      <div
        id="headcontainer"
        className="flex w-full h-1/3 p-10 my-10 bg-gray-700  items-center justify-center"
      >
        <input
          className="min-w-2/3 xl:w-1/3 px-2 h-14 rounded-2xl mx-6 "
          type="text"
          name=""
          id=""
          placeholder="ค้นหาบางอย่าง"
        />
        <div className="w-14 h-14 flex justify-center items-center bg-yellow-200 rounded-full cursor-pointer hover:bg-gray-100 transition ease-in duration-200 ">
          <p className="font-display  text-xl">ค้นหา</p>
        </div>
      </div>
    </div>
  );
}
