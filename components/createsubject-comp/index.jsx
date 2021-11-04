import React from "react";
import { Disclosure } from "@headlessui/react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
export default function CreateSubject() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-200 p-2 ">
      <div className="flex max-w-full md:max-w-4xl max-h-full w-full md:w-2/3   bg-white rounded-lg shadow-lg">
        <div className="bg-yellow-300 w-1/3"></div>
        <form  onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 flex p-5 flex-col space-y-2 w-full">
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
                placeholder="รหัสวิชา 8 หลัก เช่น 90010001"
                className=" w-5/6  bg-gray-200 outline-none p-2 text-xs sm:text-lg  md:text-sm font-display h-10 rounded-md"
                type="text"
                {...register("course_id", {
                  required: true,
                  minLength:8,
                  maxLength: 8,
                  pattern: /[0-9]/i,
                })}
              />
              {!errors.course_id && <Currect args="ข้อมูลถูกต้อง" ></Currect> }
              {errors.course_id?.type === 'required' && <InCurrect args="จำเป็นต้องใส่รหัสวิชา"></InCurrect>}
              {errors.course_id?.type === 'pattern' && <InCurrect args="รูบแบบไม่ถูกต้อง"></InCurrect>}
              {errors.course_id?.type === 'minLength'  && <InCurrect args="รหัสวิชาต้องมี 8 ตัว"></InCurrect>}
              {errors.course_id?.type === 'maxLength'  && <InCurrect args="รหัสวิชาต้องมีไม่เกิน 8 ตัว"></InCurrect>}
            </div>
            <div>
              <p className="font-display  text-gray-600 font-normal text-xs sm:text-lg  md:text-xl">
                ชื่อวิชา (ไทย) :
              </p>
              <input
                 {...register("thai_name", {
                    required: true,
                    minLength:10,
                    maxLength: 50,
                    pattern: /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]+$/i,
                  })}
                
                placeholder="ชื่อวิชาภาษาไทย เช่น รัก สจล."
                className="w-5/6 bg-gray-200 outline-none p-2  font-display h-10 text-xs sm:text-lg  md:text-sm rounded-md"
                type="text"
              />
              
                {errors.thai_name?.type === 'required' && <InCurrect args="จำเป็นต้องมีชื่อวิชา (ภาษาไทย)"></InCurrect>}
                {errors.thai_name?.type === 'pattern' && <InCurrect args="กรอกภาษาไทยเท่านั้น"></InCurrect>}
                {errors.thai_name?.type === 'minLength'  && <InCurrect args="ชื่อวิชาต้องมีอย่างน้อย 10 ตัวอักษร"></InCurrect>}
                {errors.thai_name?.type === 'maxLength'  && <InCurrect args="รหัสวิชาต้องมีไม่เกิน 50 ตัวอักษร"></InCurrect>}
                {!errors.thai_name && <Currect args="ข้อมูลถูกต้อง" ></Currect> }
            </div>
            <div>
              <p className="font-display  text-gray-600 font-normal text-xs sm:text-lg  md:text-xl">
                ชื่อวิชา (อังกฤษ) :
              </p>
              <input
                name="eng_name"
                placeholder="ชื่อวิชาภาษาไทย เช่น Love kmitl"
                className="w-5/6 bg-gray-200 outline-none p-2  text-xs sm:text-lg  md:text-sm font-display h-10 rounded-md"
                type="text"
              />
            </div>
          </div>

          <div className="space-x-3 flex py-3">
            <button
              type="button"
              className="py-3 px-6 text-gray-600 rounded-lg text-xs sm:text-lg  md:text-sm font-display bg-gray-200 hover:bg-gray-300 shadow-md block md:inline-block"
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="py-3 px-6 text-white rounded-lg  text-xs sm:text-lg  md:text-sm font-display hover:bg-yellow-400 bg-yellow-300 shadow-md block md:inline-block"
            >
              เพิ่มรายวิชา
            </button>
          </div>
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
      <CheckIcon className="w-3 h-3  bg-green-300 rounded-full "></CheckIcon>
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
