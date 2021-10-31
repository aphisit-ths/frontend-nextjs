import { Subject } from "@material-ui/icons";
import React, { useState } from "react";
import DropDown from "../../components/subject_review/moreDropdown";
import Link from "next/link";
export default function Review_Subject({subject}) {

  const [like, setLike] = useState(0);

   const { comments, homework_rate, content_rate, lecturer_rate } = subject;
  
  const find_avg = (arr) => {
    return arr.reduce((sum, value) => sum + value, 0) / arr.length;
  };
   const avg_homework = find_avg(homework_rate).toFixed(0);
  
  const avg_content = find_avg(content_rate).toFixed(0);
  const avg_lecturer = find_avg(lecturer_rate).toFixed(0);
  
  return (
      <div className=" flex flex-col bg-gray-800   items-center p-6 ">
        <div className="bg-gray-50 w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10 space-y-3 ">
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6  ">
            <h1 className="font-display font-bold text-lg px-4 py-2   bg-purple-400  rounded-3xl">
              {subject.course_id}
            </h1>
            <h1 className="font-display font-bold text-sm lg:text-lg mx-3 py-2   rounded-3xl">
              {subject.eng_name}
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

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              ภาระงาน/การบ้าน
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200 w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-yellow-400   w-6 py-1  text-white rounded-3xl"
                  style={{ width: `${avg_homework}%` }}
                ></div>
              </div>
              <p> {avg_homework}%</p>
            </div>
          </div>

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              เนื้อหาที่สอน
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200  w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-purple-600 text-xs  w-6 py-1  text-white rounded-3xl"
                  style={{ width: `${avg_content}%` }}
                ></div>
              </div>
              <p>{avg_content}%</p>
            </div>
          </div>

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light  text-sm lg:text-lg px-4 py-2rounded-3xl ">
              การสอนของอาจารย์
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200 text-xs w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-green-500 text-xs  w-6 py-1  text-white rounded-3xl"
                  style={{ width: `${avg_lecturer}%` }}
                ></div>
              </div>
              <p>{avg_lecturer}%</p>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex  items-end justify-end px-2 xl:pl-6 my-6 space-x-5">
            <Link href="/reviewsubjects" passHref>
              <h1 className="font-display font-normal shadow-sm text-lg lg:text-base my-6 px-5 py-2 rounded-md bg-gray-300 text-gray-800 transition ease-in  hover:shadow-lg  cursor-pointer  ">
                ย้อนกลับ
              </h1>
            </Link>
            <Link href={"/createreview/" + subject.id}   passHref>
              <h1 className="font-display font-normal shadow-sm text-lg lg:text-base my-6 px-5 py-2 rounded-md bg-green-500 text-gray-50 transition ease-in  hover:shadow-lg  cursor-pointer  ">
                รีวิววิชานี้
              </h1>
            </Link>
          </div>
        </div>
        {/* -------------------------commnets section ------------------------------------------------------------*/}
        {comments.map((_comment, index) => (
          <>
            <div  keys={index}
              className="bg-gray-50 w-full lg:w-2/5  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10   space-y-3 "
            >
              <div className=" w-full inline-flex flex-warp font-display  items-center px-2 xl:px-6  ">
                {_comment.comment}
              </div>
              <div className="min-w-full w-4/6  inline-flex items-center px-2 xl:px-6  my-2   ">
                <p  className="text-sm font-display font-light text-gray-400">
                  {" "}
                  โดย {_comment.owner.name}{" "}
                </p>
              </div>
              <div className="flex justify-between px-6 my-2  ">
                <div className="flex justify-center items-center">
                  <div
                    className="rounded-full bg-green-300 hover:bg-green-200 p-2 mr-2 cursor-pointer "
                    onClick={() => {
                      setLike(like + 1);
                    }}
                  >
                    <Like className="w-6 h-6 "></Like>
                  </div>
                  {like}
                </div>
                <DropDown comment={_comment} ></DropDown>
              </div>
            </div>
          </>
        ))}
      </div>
   
  );
}

function Like(props) {
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
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  );
}
