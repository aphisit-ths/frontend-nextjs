import React, { useState } from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { Check } from "@material-ui/icons";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ErrorMsg from "../../components/error/errorMsg";
import DotLoader from "../../components/loader/DotLoader";
import DoneMsg from "../successful/done";
import Link from "next/link";

import { GET_SUBJECTS } from "../../pages/reviewsubjects/index";

const ADD_SUBJECT = gql`
  mutation ADD_SUBJECT(
    $course_id: String!
    $eng_name: String!
    $thai_name: String!
  ) {
    addSubject(
      course_id: $course_id
      eng_name: $eng_name
      thai_name: $thai_name
    ) {
      id
      course_id
      createdAt
      eng_name
      thai_name
    }
  }
`;

export default function CreateSubject() {
  const [addSubject, { data, error, loading }] = useMutation(ADD_SUBJECT, {
    onCompleted: (data) => {
      console.log("add subject ===> successful");
    },
    refetchQueries: [{ query: GET_SUBJECTS }],
  });

  const {register,handleSubmit,reset,formState: { errors },} = useForm({mode:"onChange"});

  const onSubmit = async (info) => {
    await addSubject({ variables: { ...info } });
    reset();
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-gray-200 p-2 ">
      {/* <--form part --> */}
      <div className="flex max-w-full md:max-w-4xl max-h-full w-full md:w-2/3   bg-white rounded-lg shadow-lg">
        <div className="bg-yellow-300 w-1/3"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 flex p-5 flex-col space-y-2 w-full"
        >
          <div className="w-full ">
            <div>
              <p className="font-display font-semibold text-gray-800 text-3xl">
                เพิ่มรายวิชา
              </p>
              <div className="flex flex-row items-center space-x-2">
                <p className="font-display  text-gray-400 font-thin text-xs  md:text-sm">
                  จำเป็นต้องได้รับการตรวจสอบก่อน
                </p>
                <CheckIcon className=" bg-gray-300 rounded-md w-3 h-3 md:w-3 md:h-3"></CheckIcon>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2 md:space-y-5">
            <div className="space-y-1">
              <p className="font-display  text-gray-600 font-normal text-xs sm:text-lg  md:text-xl">
                รหัสวิชา :
              </p>
              <input
              
              {...register("course_id", {
                required: true,
                minLength: 8,
                maxLength: 8,
                pattern: /^[0-9]+$/
              })}
                placeholder="รหัสวิชา 8 หลัก เช่น 90010001"
                className={` w-5/6  bg-gray-200 outline-none p-2 text-xs sm:text-lg ${
                  errors.course_id && "ring-2  ring-red-300"
                }  md:text-sm font-display h-10 rounded-md`}
                type="text"
                
              />
              {errors.course_id?.type === "required" && (
                <InCurrect args="จำเป็นต้องใส่รหัสวิชา"></InCurrect>
              )}
              {errors.course_id?.type === "pattern" && (
                <InCurrect args="รูบแบบไม่ถูกต้อง"></InCurrect>
              )}
              {errors.course_id?.type === "minLength" && (
                <InCurrect args="รหัสวิชาต้องมี 8 ตัว"></InCurrect>
              )}
              {errors.course_id?.type === "maxLength" && (
                <InCurrect args="รหัสวิชาต้องมีไม่เกิน 8 ตัว"></InCurrect>
              )}
            </div>
            <div>
              <p className="font-display  text-gray-600 font-normal text-xs sm:text-lg  md:text-xl">
                ชื่อวิชา (ไทย) :
              </p>
              <input
                {...register("thai_name", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                  pattern:
                    /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์0-9\s]+$/i,
                })}
                placeholder="ชื่อวิชาภาษาไทย เช่น รัก สจล."
                className={` w-5/6  bg-gray-200 outline-none p-2 text-xs sm:text-lg ${
                  errors.thai_name && "ring-2  ring-red-300"
                }  md:text-sm font-display h-10 rounded-md`}
                type="text"
              />

              {errors.thai_name?.type === "required" && (
                <InCurrect args="จำเป็นต้องมีชื่อวิชา (ภาษาไทย)"></InCurrect>
              )}
              {errors.thai_name?.type === "pattern" && (
                <InCurrect args="กรอกภาษาไทยเท่านั้น"></InCurrect>
              )}
              {errors.thai_name?.type === "minLength" && (
                <InCurrect args="ชื่อวิชาต้องมีอย่างน้อย 5 ตัวอักษร"></InCurrect>
              )}
              {errors.thai_name?.type === "maxLength" && (
                <InCurrect args="รหัสวิชาต้องมีไม่เกิน 50 ตัวอักษร"></InCurrect>
              )}
            </div>
            <div>
              <p className="font-display  text-gray-600 font-normal text-xs sm:text-lg  md:text-xl">
                ชื่อวิชา (อังกฤษ) :
              </p>
              <input
                placeholder="ชื่อวิชาภาษาอังกฤษ เช่น Love kmitl"
                className={` w-5/6  bg-gray-200 outline-none p-2 text-xs sm:text-lg ${
                  errors.thai_name && "ring-2  ring-red-300"
                }  md:text-sm font-display h-10 rounded-md`}
                type="text"
                {...register("eng_name", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                  pattern: /^[a-zA-Z0-9]/,
                })}
              />
              {errors.eng_name?.type === "required" && (
                <InCurrect args="จำเป็นต้องมีชื่อวิชา (อังกฤษ)"></InCurrect>
              )}
              {errors.eng_name?.type === "pattern" && (
                <InCurrect args="กรอกภาษาอังกฤษและตัวเลขเท่านั้น"></InCurrect>
              )}
              {errors.eng_name?.type === "minLength" && (
                <InCurrect args="ชื่อวิชาต้องมีอย่างน้อย 5 ตัวอักษร"></InCurrect>
              )}
              {errors.eng_name?.type === "maxLength" && (
                <InCurrect args="รหัสวิชาต้องมีไม่เกิน 50 ตัวอักษร"></InCurrect>
              )}
            </div>
          </div>

          <div className="space-x-3 flex py-3">
            <Link href="/reviewsubjects" passHref>
              <p
                type="button"
                className="py-3 px-6 text-gray-600 rounded-lg text-xs sm:text-lg  cursor-pointer md:text-sm font-display bg-gray-200 hover:bg-gray-300 shadow-md block md:inline-block"
              >
                ย้อนกลับ
              </p>
            </Link>

            <button
              type="submit"
              className="py-3 px-6 text-white rounded-lg cursor-pointer  text-xs sm:text-lg  md:text-sm font-display hover:bg-yellow-400 bg-yellow-300 shadow-md block md:inline-block"
            >
              เพิ่มรายวิชา
            </button>
          </div>
          {loading && <DotLoader></DotLoader>}
          {error && <ErrorMsg args={error.message.split("GraphQL error:")} />}
          {data && (
            <DoneMsg
              args={"ขอบคุณสำหรับการเพิ่มวิชา " + data.addSubject.course_id}
            />
          )}
        </form>
      </div>
    </div>
  );
}

function Currect({ args }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2 font-display text-xs md:text-sm text-green-400">
        {args}
      </p>{" "}
      <CheckIcon className="w-3 h-3 bg-green-300 rounded-full "></CheckIcon>
    </div>
  );
}

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

function CheckDefult({ args }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2 font-display text-xs md:text-sm text-gray-400">
        {args}
      </p>{" "}
      <CheckIcon className="w-3 h-3  bg-gray-200 rounded-full "></CheckIcon>
    </div>
  );
}
