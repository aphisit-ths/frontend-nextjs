import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/react-hooks";
import LoadComment from "../loader/LoadComment";
import Link from "next/link";
import gql from "graphql-tag";
import Error from "../error";
const GET_COMMENTS = gql`
  query {
    subjectComments {
      id
      subjectId {
        id
        course_id
        eng_name
        thai_name
      }
      comment
      grade
      year
      section
      owner {
        id
        name
      }
      homework_rate
      content_rate
      lecturer_rate
    }
  }
`;
export default function Preview_Comments() {
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    pollInterval: 5000,
  });
  if (loading) return <LoadComment loading={loading}></LoadComment>;
  if (error) return <Error />;
  const { subjectComments } = data;
  
  return (
    <div>
      <div className="flex flex-col items-center p-1 justify-center md:p-10">
        <div className=" bg-gray-50 w-full lg:w-2/5 mt-5 py-4 px-3 md:px-4 ">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-display  text-lg">แนะนำล่าสุด</p>
              <div className=" w-28 rounded-2xl h-1 bg-green-300"></div>
            </div>
            <Link href="/createsubject" passHref >
              <div className="flex flex-col">
                <p className="font-display p-1 text-white shadow-md hover:shadow-lg  bg-green-400 hover:bg-green-500 cursor-pointer rounded-md text-lg">
                  + เพิ่มรายวิชา{" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
        {subjectComments.map((comment, index) => (
          <>
            <Link href={"reviewsubjects/" + comment.subjectId.id} passHref>
              <motion.div
                whileTap={{ scale: 0.8 }}
                key={comment.subjectId.id}
                className="bg-gray-50 w-full lg:w-2/5  max-h-full rounded-xl flex flex-col my-3  p-6 px-2 transition   cursor-pointer r shadow-lg space-y-3 hover:bg-gray-100  duration-200 "
              >
                <div className="  inline-flex py-2 w-2/3 flex-warp font-display items-center  z-30 px-2 xl:px-6  ">
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
              </motion.div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
