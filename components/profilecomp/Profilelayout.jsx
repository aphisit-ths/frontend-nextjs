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
import { XIcon } from "@heroicons/react/solid";


function Profile() {


 
  return (
    <div className="flex justify-center p-5  w-screen ">
      <div className="flex flex-col rounded-md shadow-md w-full sm:w-full md:w-2/3 xl:w-1/3   py-10  ">
        <div className="flex flex-col items-center my-10 w-full  ">
          <h1 className=" text-2xl md:text-3xl text-displaycolor font-display font-normal py-3">
            ข้อมูลส่วนตัวของ
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
              readOnly="true"
            />


            <span className="font-display mx-5 tracking-wide font-normal mt-6 text-sm xl:text-xl">
              อีเมล:
            </span>
            <input
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5 mt-2   " border-black-300 ring-2 ring-red-400"}   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              placeholder="อีเมล"
              readOnly="true"
            />


            <span className="font-display tracking-wide mx-5  mt-6 font-normal text-sm xl:text-xl">
              รหัสผ่าน:
            </span>
            <input
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5 mt-2 " border-black-400 ring-2 ring-red-400"}    rounded-lg outline-none  bg-gray-50 `}
              type="password"
              placeholder="*************"
              readOnly="true"
            />



            <button
              type="submit"
              className=" mx-4 mt-6 bg-kmitl-normal hover:bg-kmitl-hover hover:shadow-xl ease-in duration-150 text-gray-50  hover:text-white py-4 border font-display text-sm xl:font-normal  w-full  rounded-3xl"
            >
              แก้ไขข้อมูล
            </button>
            
          </form>
          
        </div>
      </div>
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

