import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../loader/Loader";
import Link from "next/link";
import gql from "graphql-tag";
const GET_SUBJECTS = gql`
  query {
    subjects {
      id
      course_id
      eng_name
      thai_name
    }
  }
`;

export default function SubjectsReviewComponent({ comments }) {
  const { loading, error, data } = useQuery(GET_SUBJECTS, {
    pollInterval: 5000,
  });
  const [filteredData, setFillteredData] = useState([]);
  const [wordEntered, setWordEnterd] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEnterd(searchWord);
    const newFilter = subjects.filter((value) => {
      return (
        value.course_id
          .toLowerCase()
          .trim()
          .includes(searchWord.toLowerCase().trim()) ||
        value.eng_name
          .toLowerCase()
          .trim()
          .includes(searchWord.toLowerCase().trim()) ||
        value.thai_name
          .toLowerCase()
          .trim()
          .includes(searchWord.toLowerCase().trim())
      );
    });
    if (searchWord === "") {
      setFillteredData([]);
    } else {
      setFillteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFillteredData([]);
    setWordEnterd("");
  };
  if (loading) return <Loader></Loader>;
  if (error)
    return (
      <h1 className="text-2xl font-display  text-gray-800">
        Server went wrong....
      </h1>
    );
  const { subjects } = data;
  return (
    <div>
      <div className="w-screen h-screen bg-gray-50 flex flex-col items-center p-2 md:p-10">
        <div className="px-5  flex flex-row shadow-md items-center  bg-gray-100  justify-between  w-full lg:w-2/5  max-h-full rounded-xl">
          <input
            className="h-10 font-display text-sm  bg-transparent min-w-2/3 w-2/3 outline-none "
            type="text"
            name=""
            id=""
            value={wordEntered}
            placeholder="กรอกรหัสวิชาหรือชื่อวิชา (ไทย/อังกฤษ)"
            onChange={handleFilter}
          />
          <div className="p-2 m-1 bg-green-200  rounded-full cursor-pointer hover:bg-green-500">
            {filteredData.length == 0 ? (
              <SrcBtt className="w-6 h-6"></SrcBtt>
            ) : (
              <div onClick={clearInput}>
                <CloseIcon className="w-6 h-6"></CloseIcon>
              </div>
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className=" flex flex-col rounded-xl z-50 bg-gray-50 absolute mt-16 shadow-md overflow-hidden overflow-y-auto w-full lg:w-2/5  max-h-full h-1/3  mx-10 divide-y-1   my-5">
            {filteredData.map((subject, idx) => (
              <>
                <Link href={"/reviewsubjects/" + subject.id} passHref>
                  <div
                    key={idx}
                    className="flex  p-2 px-5 space-x-6 min-h-20 max-h-16 h-24 top-7 hover:bg-gray-800 hover:text-gray-50  font-display justify-between cursor-pointer"
                    id="subject"
                  >
                    <div className="inline-flex space-x-5  flex-row overflow-hidden ">
                      <p className="font-display font-normal ">
                        {" "}
                        {subject.course_id}{" "}
                      </p>
                      <p className="font-display font-light ">
                        {" "}
                        {subject.thai_name}{" "}
                      </p>
                    </div>
                    <motion.div>
                      <RightArrow className="w-6 h-6 stroke-2"></RightArrow>
                    </motion.div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        )}

        <div className=" bg-gray-50 w-full lg:w-2/5 mt-12 py-4 px-3 md:px-4 ">
          <div className="flex flex-col">
            <p className="font-display text-lg">วิชาที่แนะนำ</p>
            <div className=" w-24 rounded-2xl h-1 bg-green-300"></div>
          </div>
        </div>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-50 w-full lg:w-2/5  max-h-full rounded-xl flex flex-col my-3  p-6 px-2 transition   cursor-pointer r shadow-lg space-y-3 hover:bg-gray-100  duration-200 "
          >
            <div className=" w-full inline-flex flex-warp font-display items-center px-2 xl:px-6  ">
              {comment.subjectId.course_id}{" "}
              {comment.subjectId.eng_name.toUpperCase()}
            </div>
            <div className="min-w-full w-4/6  inline-flex items-center px-2 xl:px-6  my-2   ">
              <p className="text-sm font-display font-light text-gray-400">
                {" "}
                {comment.comment}
              </p>
            </div>

            <div className="flex justify-start px-2 xl:px-6 my-2 space-x-3  ">
              <div className="flex justify-center items-center font-display text-xs space-x-2 ">
                <div className="rounded-full bg-green-300 hover:bg-green-200 p-2 mr-2 cursor-pointer ">
                  {" "}
                </div>
                ภาระงาน : {comment.homework_rate}%
              </div>
              <div className="flex justify-center items-center font-display text-xs space-x-4 ">
                <div className="rounded-full bg-yellow-300 hover:bg-green-200 p-2 mr-2 cursor-pointer ">
                  {" "}
                </div>
                เนื้อหา : {comment.content_rate}%
              </div>
              <div className="flex justify-center items-center font-display text-xs space-x-4 ">
                <div className="rounded-full bg-red-300 hover:bg-green-200 p-2 mr-2 cursor-pointer ">
                  {" "}
                </div>
                การสอน : {comment.lecturer_rate}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SrcBtt(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...params}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function RightArrow(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...params}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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

function CloseIcon(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...params}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
