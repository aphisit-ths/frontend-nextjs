import React from "react";
import Image from "next/image";
import Link from "next/Link"
function Select_Topic() {
  return (
    <>
      <div className="flex flex-col  sm:flex-row justify-start bg-gray-100 w-screen h-screen p-20 space-y-10 sm:space-y-0 sm:space-x-10  items-center sm:justify-center overflow-y-scroll ">
      <Link href="reviewsubjects" >
        <div className="w-60 h-60  bg-white block p-4 border-1 border-gray-500 shadow-xl border-opacity-20 transform transition ease-in rounded-xl cursor-pointer   hover:-translate-y-2  hover:translate-x-2 ">
          <div className="flex flex-row  w-50 h-1/2 space-x-2 items-center justify-center ">
            <div className="mx-2  items-center    justify-center">
              <Toppic className=" self-center w-16 h-16 rounded-full bg-yellow-100 "></Toppic>
            </div>
            
            <div className="flex-1 font-display text-xl text-gray-600 ">
              วิชาเลือก
            </div>
          </div>
          <div className="inline-flex flex-row w-50 h-1/2 px-2 py-2 space-x-1 ">
            <h1 className="font-display text-sm text-gray-500 ">
              ไม่รู้จะลงวิชาใหนดีหรือ อยากแบ่งบันประสบการณ์ ในรายวิชาต่างๆ{" "}
            </h1>
            <RightArrow className=""></RightArrow>
          </div>
        </div>
        </Link>
        <div className="w-60 h-60  bg-white block p-4 border-1 border-gray-500 shadow-xl border-opacity-20 transform transition ease-in rounded-xl cursor-pointer   hover:-translate-y-2  hover:translate-x-2 ">
          <div className="flex flex-row  w-50 h-1/2 space-x-2 items-center justify-center ">
            <div className="mx-2  items-center    justify-center">
              <Toppic className=" self-center w-16 h-16 rounded-full bg-yellow-100"></Toppic>
            </div>
            <div className="flex-1 font-display text-xl text-gray-600 ">
              ร้านอาหาร
            </div>
          </div>
          <div className="inline-flex flex-row w-50 h-1/2 px-2 py-2 space-x-1 ">
            <h1 className="font-display text-sm text-gray-500 ">
            หิวแล้วไม่รู้จะทานอะไรหรืออยากแนะนำร้านอร่อยๆ เชิญทางนี้เลย{" "}
            </h1>
            <RightArrow className=""></RightArrow>
          </div>
        </div>
        <div className="w-60 h-60  bg-white block p-4 border-1 border-gray-500 shadow-xl border-opacity-20 transform transition ease-in rounded-xl cursor-pointer   hover:-translate-y-2  hover:translate-x-2 ">
          <div className="flex flex-row  w-50 h-1/2 space-x-1 items-center justify-center ">
            <div className="mx-2  items-center    justify-center">
              <Toppic className=" self-center w-16 h-16 rounded-full bg-yellow-100 "></Toppic>
            </div>
            <div className="flex-1 font-display text-lg text-gray-600 ">
              ที่อ่านหนังสือ
            </div>
          </div>
          <div className="inline-flex flex-row w-50 h-1/2 px-2 py-2 space-x-1 ">
            <h1 className="font-display text-sm text-gray-500 ">
            จะสอบแล้วไม่รู้จะอ่านหนังสือที่ไหนหรือมีสถานที่สุดเจ๋งอยากแนะนำ{" "}
            </h1>
            <RightArrow className=""></RightArrow>
          </div>
        </div>
      </div>
    </>
  );
}

export default Select_Topic;

function SubjectIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
function Toppic(params) {
  return (
    <svg
      {...params}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  );
}
function RightArrow(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      stroke="#FFE68c"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
