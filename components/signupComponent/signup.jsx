import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InCurrect from "../error/error_validate"
import ErrorMsg from "../error/errorMsg"
const SIGN_UP = gql`
  mutation SIGN_UP($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

function Signupform() {
  const {register,reset,handleSubmit ,formState:{errors}} = useForm({mode:"onChange"});
  const [popup, setPopup] = useState(false);

  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      if (data) {
        setPopup(true);
        console.log("register sucessfull ===>")
      }
    },
  });
 
  const onSubmit = async (info) => {
    try {
      await signup({variables:info});
      reset()
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div className="flex justify-center p-5 w-screen ">
      <div className="flex flex-col rounded-md shadow-md w-full sm:w-full md:w-2/3 xl:w-1/3 min-h-1/2 py-6  ">
        <div className="flex flex-col items-center w-full  ">
          <h1 className=" text-2xl md:text-3xl xl:3xl text-displaycolor font-display font-normal py-6 ">
            ลงทะเบียนผู้ใช้
          </h1>
          <form
            action=""
            className="flex flex-col w-2/3 m-3 p-3  "
            type="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="font-display tracking-wide mx-5 font-normal text-sm xl:text-lg text-displaycolor  ">
              ชื่อเล่น:
            </span>
            <input
             className={` border-2 h-8 w-full md:h-14  mx-5 p-5  ${errors.name && " border-red-400  "}   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              name="name"
              placeholder="นามแฝงที่จะใช้ในแอพพลิเคชั่น"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength:12,
                pattern: /^[A-Za-z][A-Za-z0-9]*$/,
              })}
            />
             <div className="my-2 ">
              {errors.name?.type === "required" && (
                <InCurrect args="จำเป็นต้องมีชื่อเล่น"></InCurrect>
              )}
              {errors.name?.type === "pattern" && (
                <InCurrect args="รูปแบบชื่อเล่นต้องขึ้นต้นเป็นภาษาอังกฤษเท่านั้น"></InCurrect>
              )}
              {errors.name?.type === "minLength" && (
                <InCurrect args="ชื่อเล่นต้องมีตั้งแต่ 3 ตัวอักษรขึ้นไป"></InCurrect>
              )}
              {errors.name?.type === "maxLenhth" && (
                <InCurrect args="ชื่อเล่นต้องมีไม่เกิน 12 ตัวอักษร"></InCurrect>
              )}
            </div>
            <span className="font-display tracking-wide mx-5 font-normal text-sm xl:text-lg text-displaycolor ">
              อีเมล:
            </span>
            <input
            {...register("email", {
                required: true,
                minLength: 3,
                maxLength:50,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
              })}
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5  ${errors.email && " border-red-400  "}   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              name="email"
              placeholder="อีเมล"
            />
            <div className="my-2">
              {errors.email?.type === "required" && (
                <InCurrect args="จำเป็นต้องกรอกอีเมล"></InCurrect>
              )}
              {errors.email?.type === "pattern" && (
                <InCurrect args="รูปแบบอีเมลไม่ถูกต้อง"></InCurrect>
              )}
              {errors.email?.type === "minLength" && (
                <InCurrect args="อีเมลต้องมีตั้งแต่ 3 ตัวอักษรขึ้นไป"></InCurrect>
              )}
              {errors.email?.type === "maxLength" && (
                <InCurrect args="อีเมลต้องมีไม่เกิน 50 ตัวอักษร"></InCurrect>
              )}
            </div>
            <span className="font-display tracking-wide mx-5 font-normal text-sm xl:text-lg text-displaycolor ">
              รหัสผ่าน:
            </span>
            <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength:50
            })}
            className={` border-2 h-8 w-full md:h-14  mx-5 p-5  ${errors.password && " border-red-400  "}   rounded-lg outline-none  bg-gray-50 `}
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              
            />
            <div className="my-2">
              {errors.password?.type === "required" && (
                <InCurrect args="จำเป็นต้องกรอกรหัสผ่าน"></InCurrect>
              )}
              {errors.password?.type === "minLength" && (
                <InCurrect args="กรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"></InCurrect>
              )}
              {errors.password?.type === "maxLength" && (
                <InCurrect args="รหัสผ่านต้องมีไม่เกิน 50 ตัวอักษร"></InCurrect>
              )}
            </div>

            {error && (
              <div  className="mx-5 w-full ">
                {" "}
                <ErrorMsg args={error.message.split("GraphQL error:")}></ErrorMsg>{" "}
              </div>
            )}
            {popup && (
              <>
                <div className=" flex-col space-y-4 min-w-screen h-screen px-5  md:px-16 fixed  left-0 top-0 flex justify-center items-center transition-opacity duration-200 bg-gray-600 bg-opacity-30 inset-0 z-50 outline-none focus:outline-none ">
                  <motion.div
                    animate={{ scale: [1.1,1.3,1.1] }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col p-2 lg:p-8  w-full sm:w-full lg:w-4/6 xl:w-2/6 h-1/5  max-h-full justify-between items-center  bg-white shadow-md hover:shodow-lg rounded-2xl opacity-100"
                  >
                      <div className="flex flex-col items-center justify-evenly space-y-5  ">
                        <div className="flex flex-col items-center justify-center ">
                          <p className="font-display text-xs md:text-sm xl:text-xl leading-none">
                            ขอบคุณสำหรับการลงทะเบียน
                          </p>
                          <p className=" font-thin text-xs md:text-sm font-display text-gray-400 leading-none mt-1">
                            คุณต้องการเข้าสู่ระบบเลยหรือไม่ ?
                          </p>
                        </div>
                        <Link href="/signin" passHref>
                          <button className="font-display bg-kmitl-normal px-3 py-2 font-thin text-xs md:text-sm shadow-sm hover:shadow-lg    text-white rounded-full">
                            เข้าสู่ระบบ
                          </button>
                        </Link>
                      </div>
                    
                    <p
                      onClick={() => setPopup(!popup)}
                      className="flex w-6 h-6 items-center m-2 md:m-5 justify-center rounded-full cursor-pointer bg-gray-200 "
                    >
                      X
                    </p>
                  </motion.div>
                </div>
              </>
            )}
            <button
              type="submit"
              disabled={loading}
              className=" mx-4  bg-kmitl-normal hover:bg-kmitl-hover hover:shadow-xl ease-in duration-150 text-gray-50  hover:text-white py-3 w-full border font-display font-normal   rounded-3xl"
            >
              ลงทะเบียนผู้ใช้
            </button>
            
          </form>
          <Link href="/signin" passHref>
            <span className="font-display  text-xs md:text-sm font-light cursor-pointer text-gray-400">
              หากมีผู้ใช้บัญชีผู้ใช้อยู่แล้ว ?{" "}
              <span className="font-display text-xs  md:text-sm  font-medium text-gray-500">
                เข้าสู่ระบบ
              </span>{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Googlesvg = () => {
  return (
    <>
      <svg
        className="w-6 mx-4 justify-self-start  rounded-full "
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 64 64"
      >
        <g>
          <path
            d="M32.709,0.835c-9.453,0-17.881,4.146-23.591,10.719c-1.74,2.005-3.231,4.232-4.417,6.641l10.501,8.021   c1.217-3.693,3.567-6.862,6.64-9.104c3.043-2.217,6.795-3.527,10.866-3.527c4.398,0,8.37,1.559,11.491,4.109l9.079-9.066   C47.747,3.81,40.654,0.835,32.709,0.835z"
            fill="#FF7976"
          />
          <path
            d="M4.702,18.194l10.501,8.021c1.217-3.693,3.567-6.862,6.64-9.104c3.043-2.217,6.795-3.527,10.866-3.527   c4.398,0,8.37,1.559,11.491,4.109l9.079-9.066c-5.533-4.816-12.625-7.792-20.57-7.792"
            fill="#E3443A"
          />
          <path
            d="M14.268,32c0-0.287,0.021-0.57,0.034-0.854c0.082-1.716,0.387-3.37,0.901-4.931L4.702,18.194   c-1.931,3.917-3.051,8.303-3.177,12.952C1.517,31.431,1.5,31.714,1.5,32c0,0.287,0.017,0.571,0.024,0.856   c0.126,4.643,1.246,9.027,3.172,12.94l10.498-8.036c-0.509-1.553-0.812-3.2-0.892-4.905C14.289,32.571,14.268,32.288,14.268,32z"
            fill="#F4D72C"
          />
          <path
            d="M4.697,45.796l10.498-8.036c-0.509-1.553-0.812-3.2-0.892-4.905c-0.013-0.285-0.034-0.568-0.034-0.856   c0-0.287,0.021-0.57,0.034-0.854c0.082-1.716,0.387-3.37,0.901-4.931L4.702,18.194"
            fill="#F7B92B"
          />
          <path d="M1.5,32" fill="#F7B92B" />
          <path
            d="M43.074,47.691c-2.813,1.772-6.356,2.725-10.365,2.725c-2.346,0-4.581-0.446-6.641-1.239   c-1.517-0.584-2.933-1.365-4.226-2.305c-3.072-2.237-5.423-5.396-6.64-9.086l-10.501,8.02c1.184,2.405,2.672,4.629,4.409,6.631   c5.71,6.58,14.144,10.729,23.599,10.729c2.86,0,5.671-0.382,8.355-1.126c4.462-1.238,8.574-3.479,11.979-6.641L43.074,47.691z"
            fill="#59C96E"
          />
          <path
            d="M4.702,45.806c1.184,2.405,2.672,4.629,4.409,6.631c5.71,6.58,14.144,10.729,23.599,10.729   c2.86,0,5.671-0.382,8.355-1.126c4.462-1.238,8.574-3.479,11.979-6.641l-9.97-7.707c-2.813,1.772-6.356,2.725-10.365,2.725   c-2.346,0-4.581-0.446-6.641-1.239c-1.517-0.584-2.933-1.365-4.226-2.305"
            fill="#40A557"
          />
          <path
            d="M61.791,26H59.92H33v5.146v1.71V38h16.449c-0.837,4-3.115,7.636-6.375,9.691l9.97,7.707   c2.734-2.538,5.005-5.723,6.639-9.407c1.792-4.036,2.817-8.87,2.817-14.182C62.5,29.969,62.217,28,61.791,26z"
            fill="#0FAEF4"
          />
          <path
            d="M53.044,55.398c2.734-2.538,5.025-5.759,6.659-9.443c1.792-4.036,2.807-8.852,2.807-14.163   c0-1.841-0.293-3.792-0.719-5.792H60"
            fill="#4087ED"
          />
          <polyline fill="#4087ED" points="33,31 33,32.856 33,38 49,38  " />
        </g>
      </svg>
    </>
  );
};
function Icon(args) {
  return (
    <div>
      <svg
        {...args}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}


export default Signupform;
