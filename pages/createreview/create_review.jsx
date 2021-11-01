import React, { useState } from "react";
import Link from "next/link";

export default function CreateReview({ subject }) {
  const yearNow = new Date().getFullYear();
  let currentYearThai = yearNow + 543;
  const [lecturer_rate, setLecturer_rate] = useState(emoji[2].value);
  const [content_rate, setContent_rate] = useState(emoji[2].value);
  const [homework_rate, setHomework_rate] = useState(emoji[2].value);

  const { course_id, thai_name, eng_name } = subject;
  const [comment_info, setComment_info] = useState({
    // add rating later,
    lecturer_rate: lecturer_rate,
    content_rate: content_rate,
    homework_rate: homework_rate,
    course_id: course_id,
    content: "",
    section: "1",
    grade: "A",
    year: currentYearThai,
  });

  let yearList = [{ value: currentYearThai.toString() }];
  for (let index = 0; index < 5; index++) {
    currentYearThai -= 1;
    yearList.push({
      value: currentYearThai.toString(),
    });
  }

  const handleChange = (e) => {
    setComment_info({
      ...comment_info,
      [e.target.name]: e.target.value,
    });
    console.log(comment_info);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(comment_info);
    } catch (error) {
      console.log(error);
    }
  };

  const changeLecturer_rate = (feel) => {
    setLecturer_rate(feel.value);
    setComment_info({
      ...comment_info,
      lecturer_rate: feel.value,
    });
    console.log(comment_info);
  };
  const changeHomework_rate = (feel) => {
    setHomework_rate(feel.value);
    setComment_info({
      ...comment_info,
      homework_rate: feel.value,
    });
    console.log(comment_info);
  };
  const changeContent_rate = (feel) => {
    setContent_rate(feel.value);
    setComment_info({
      ...comment_info,
      content_rate: feel.value,
    });
    console.log(comment_info);
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
            <h1 className="font-display font-bold text-lg pl-4 py-2 bg-purple-400  rounded-3xl">
              {course_id}
            </h1>
            <h1 className="font-display font-bold text-sm lg:text-lg mx-3 py-2   rounded-3xl">
              {eng_name}{" "}
              <span className="font-display font-light text-sm lg:text-lg">
                ({thai_name})
              </span>
            </h1>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6 my-6  justify-between">
            <h1 className="font-display font-normal text-sm md:text-lg pl-4 py-2rounded-3xl ">
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
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                ภาระงาน/การบ้าน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>

            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeHomework_rate(feel)}
                    className={ "text-sm md:text-2xl  rounded-full cursor-pointer " + (homework_rate === feel.value? " ring-4 ring-green-300" : " ")}  
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                เนื้อหาที่สอน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>

            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeContent_rate(feel)}
                    className={
                      "text-sm md:text-2xl  rounded-full cursor-pointer " +
                      (content_rate === feel.value
                        ? "ring-4 ring-green-300"
                        : " ")
                    }
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                การสอน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>
            <div className="flex justify-between w-1/2 items-center  px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeLecturer_rate(feel)}
                    className={
                      "text-sm md:text-2xl  rounded-full cursor-pointer " +
                      (lecturer_rate === feel.value
                        ? " ring-4 ring-green-300"
                        : " ")
                    }
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          {/* ---------------------------------text area------------------------------ */}
          <div className=" w-full lg:w-full  max-h-full rounded-xl flex flex-col  p-6  px-5 xl:px-10 my-10 space-y-3  ">
            <div className="flex flex-row">
              <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800">
                เขียนรีวิววิชานี้
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>
            <textarea
              required
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
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            <select
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="grade"
              id="grade"
              required
              defaultValue="C"
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
              ปีที่เรียน
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>

            <select
              required
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="year"
              id="year"
            >
              {yearList.map((year, i) => (
                <option key={i} value={year.value}>
                  {year.value}
                </option>
              ))}
            </select>
          </div>
          {/* setion */}
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10   space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              section
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            <select
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="section"
              id="section"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="อื่น ๆ">อื่น ๆ</option>
            </select>
          </div>
          {/* setion */}
          <div className=" inline-flex flex-row min-w-full xl:min-w-2/3 justify-end items-end font-display space-x-4 px-10">
            <Link href="/reviewsubjects" passHref>
              <p className=" px-2 md:px-10 py-3 rounded-xl cursor-pointer font-display  bg-gray-300 hover:shadow-sm ">
                {" "}
                ย้อนกลับ{" "}
              </p>
            </Link>

            <button
              type="submit"
              className="px-2 py-3 text-gray-50 rounded-xl bg-green-500 shadow-sm hover:shadow-sm   "
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
      stroke="#FCA5A5"
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



function VerrySadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c0-7.95 11.49-7.95 11.49 0"
      ></path>
    </svg>

  );
}

function SadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c1.596-4.6 9.894-4.76 11.49 0"
      ></path>
    </svg>
  );
}

function NormalIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.064h11.49"
      ></path>
    </svg>
  );
}

function GoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 17.526c1.596 4.6 9.894 4.76 11.49 0"
      ></path>
    </svg>
  );
}

function VeryGoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 15.073c0 7.95 11.49 7.95 11.49 0"
      ></path>
    </svg>
  );
}

