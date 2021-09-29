import React, { useState } from "react";

export default function CreateReview({ subjects }) {
  const { course_id, eng_name, thai_name } = subjects[0];

  const [comment_info, setComment_info] = useState({
    // add rating later,
    course_id: course_id,
    content: "",
    section: "",
    grade: "",
    _year: "",
  });

  const handleChange = (e) => {
    setComment_info({
      ...comment_info,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(comment_info);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" flex flex-col bg-gray-200   items-center p-6 ">
        <form
          type="form"
          action=""
          onSubmit={handleSubmit}
          className="bg-gray-50 w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10 space-y-3 "
        >
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
            <h1 className="font-display font-normal text-sm md:text-lg px-4 py-2rounded-3xl ">
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
            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
              <SadIcon className="w-8 h-8 "></SadIcon>
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
            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
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
            <div className="flex justify-between w-1/2 items-center  px-1 md:px-5">
              <SadIcon className="w-8 h-8  rounded-full"></SadIcon>
              <SadIcon className="w-8 h-8"></SadIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
              <SmileIcon className="w-8 h-8"></SmileIcon>
            </div>
          </div>
          {/* ---------------------------------text area------------------------------ */}
          <div className=" w-full lg:w-full  max-h-full rounded-xl flex flex-col  p-6  px-5 xl:px-10 my-10 space-y-3  ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800">
              เขียนรีวิววิชานี้ <span className="text-red-600 text-3xl">*</span>
            </h1>
            <textarea
              onChange={handleChange}
              name="content"
              type="text"
              placeholder="เขียนรีวิว .....  (โปรดหลีกเลี่ยงถ้อยคำหยาบ คายและพาดพิงผู้อื่น)"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm md:text-sm font-display  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
            ></textarea>
          </div>
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10    space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              เกรดที่ได้
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full self-start place-self-start "></div>
            <select
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="grade"
              id="grade"
            >
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>
          {/* setion */}
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10  space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              year
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full self-start place-self-start "></div>
            <input
              onChange={handleChange}
              name="_year"
              type="text"
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              placeholder=" เช่น 2562"
            />
          </div>
          {/* setion */}
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10   space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              section
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full self-start place-self-start "></div>
            <input
              onChange={handleChange}
              name="section"
              type="text"
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              placeholder=" เช่น 1"
            />
          </div>
          {/* setion */}
          <div className=" inline-flex flex-row min-w-full xl:min-w-2/3 justify-end items-end font-display space-x-4 px-10">
            <button className=" px-2  md:px-10 py-4 rounded-xl bg-gray-300 shadow-sm ">
              {" "}
              ยกเลิก{" "}
            </button>
            <button
              type="submit"
              className="px-10 py-4 text-gray-50 rounded-xl bg-green-400 shadow-sm hover:bg-gray-800   "
            >
              {" "}
              รีวิววิชานี{" "}
            </button>
          </div>
        </form>
        {/* -------------------------commnets section ------------------------------------------------------------*/}
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
