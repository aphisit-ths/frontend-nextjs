import React from "react";

export default function CreateReview({ subjects }) {
  const { course_id, eng_name, thai_name } = subjects[0];
  return (
    <div>
      <div className=" flex flex-col bg-gray-50   items-center p-6 ">
        <div className="bg-gray-50 w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10 space-y-3 ">
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6  ">
            <h1 className="font-display font-bold text-lg px-4 py-2 bg-purple-400  rounded-3xl">
              {course_id}
            </h1>
            <h1 className="font-display font-bold text-sm lg:text-lg mx-3 py-2   rounded-3xl">
              {thai_name}{" "}
              <span className="font-display font-light text-sm lg:text-lg">
                ({eng_name})
              </span>
            </h1>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6 my-6  justify-between">
            <h1 className="font-display font-normal text-lg px-4 py-2rounded-3xl ">
              ภาพรวม
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                ไม่พอใจ
              </h1>
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                พอใจ
              </h1>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500  justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              ภาระงาน/การบ้าน
            </h1>
            <div className="flex justify-between w-1/2 items-center px-5">
              <SadIcon className="w-8 h-8  rounded-full"></SadIcon>
              <SadIcon className="w-8 h-8"></SadIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              เนื้อหาที่สอน
            </h1>
            <div className="flex justify-between w-1/2 items-center px-5">
              <SadIcon className="w-8 h-8 rounded-full"></SadIcon>
              <SadIcon className="w-8 h-8"></SadIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <h1 className="font-display font-light  text-sm lg:text-lg px-4 py-2rounded-3xl ">
              การสอนของอาจารย์
            </h1>
            <div className="flex justify-between w-1/2 items-center px-5">
              <SadIcon className="w-8 h-8  rounded-full"></SadIcon>
              <SadIcon className="w-8 h-8"></SadIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
            </div>
          </div>
        </div>
        {/* -------------------------commnets section ------------------------------------------------------------*/}

        <div className=" w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2 my-10 space-y-3 ">
          <h1 className="font-display self-start font-semibold text-xl text-gray-800">
            เขียนรีวิววิชานี้ <span className="text-red-600 text-3xl">*</span>
          </h1>
          <textarea
            type="text"
            placeholder="เขียนรีวิว .....  (โปรดหลีกเลี่ยงถ้อยคำหยาบ คายและพาดพิงผู้อื่น)"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-lg font-display  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function SmileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function SadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
