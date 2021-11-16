import React, { useState, useContext } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Alert, AlertTitle } from "@material-ui/lab";
import Cookies from "js-cookie";
import Router from "next/router";
import Image from "next/image";
import { AuthContext } from "../../appstate/AuthProvider";
import { useForm } from "react-hook-form";
import { XIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

function Profile({user}) {
  const {subject_comments} = user
  console.log(subject_comments)  
  console.log(user)  
  const [edit, setEdit] = useState(false)
  const handleEdit = () => {
    setEdit(!edit)
  }
  return (
    <div className="flex flex-col justify-center p-5  w-screen items-center">
      <div className="flex flex-col rounded-md shadow-md w-full sm:w-full md:w-2/3 xl:w-1/3   py-10  ">
        <div className="flex flex-col items-center my-10 w-full  ">
          <h1 className=" text-2xl md:text-3xl text-displaycolor font-display font-normal py-3">
            ข้อมูลส่วนตัวของ {user.name}
          </h1>
          <form
            className="flex flex-col w-2/3 m-3 p-3 space-x-5  "
            type="form"
          >


            <span className="font-display mx-5 tracking-wide font-normal text-sm xl:text-xl">
              ชื่อเล่น:
            </span>
            <input
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5 mt-2   " border-black-300 ring-2 ring-red-400"}   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              placeholder="ชื่อเล่นที่ตั้งไว้"
              value={user.name}
              readOnly={edit}
            />


            <span className="font-display mx-5 tracking-wide font-normal mt-6 text-sm xl:text-xl">
              อีเมล:
            </span>
            <input
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5 mt-2   " border-black-300 ring-2 ring-red-400"}   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              placeholder="อีเมล"
              value={user.email}
              readOnly={edit}
            />



            <button
              type="submit"
              onClick={() => handleEdit}
              className=" mx-4 mt-6 bg-kmitl-normal hover:bg-kmitl-hover hover:shadow-xl ease-in duration-150 text-gray-50  hover:text-white py-4 border font-display text-sm xl:font-normal  w-full  rounded-3xl"
            >
              แก้ไขข้อมูล
            </button>
            
          </form>
          
        </div>    
      </div>
      <div className="flex my-2 font-display text-2xl">กิจกรรมล่าสุด</div>
      <div className="flex flex-col md:flex-row justify-center gap-4 ">
        
        {subject_comments.slice(0,3).map((comment,index) => (
            <>
              <Link href={"reviewsubjects/" + comment.subjectId.id} passHref>
              <motion.div
                whileTap={{ scale: 0.8 }}
                key={comment.subjectId.id}
                className="bg-gray-50 w-full md:w-3/5  max-h-full rounded-xl flex flex-col my-3  p-6 px-2 transition   cursor-pointer r shadow-lg space-y-3 hover:bg-gray-100  duration-200 "
              >
                <div className="  inline-flex py-2 w-2/3 flex-warp font-display items-center  z-30 px-2 xl:px-6  ">
                  {comment.subjectId.course_id}{" "}
                  {comment.subjectId.eng_name.toUpperCase()}
                </div>
                <div className=" w-full overflow-clip overflow-hidden inline-flex items-center px-2 Truncate xl:px-6  my-2   ">
                  <p className="text-sm font-display font-light text-gray-400 overflow-hidden inline-flex  ">
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
        <Link href={"/user-review"} passHref as={"profile/user-review/" + user.name}>
        <button className="flex justify-center items-center flex-row mx-4 mt-6 text-gray-800 hover:shadow-xl ease-in duration-150 py-2 font-display text-sm xl:font-normal  w-1/5  rounded-3xl">
          <span>ดูทั้งหมด</span>
          <ArrowRightIcon className="w-8 h-8 text-yellow-300"></ArrowRightIcon> 
        </button>

        </Link>
    </div>
  );
}

export default Profile;
function InCurrect({ args }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2 font-display text-xs md:text-sm text-red-400">
        {args}
      </p>{" "}
      <XIcon className="w-3 h-3  bg-red-300 rounded-full "></XIcon>
    </div>
  );
}

