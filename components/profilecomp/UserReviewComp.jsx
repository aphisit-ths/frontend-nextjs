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
import { motion } from "framer-motion";

function UserReview({ user }) {
    const { subject_comments } = user

    console.log(subject_comments)
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    return (
        <div className="flex flex-col justify-center p-5  w-screen items-center">

            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">


                        {subject_comments ? (

                            <>
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                            <th className="px-4 py-3 font-display">วิชา</th>
                                            <th className="px-4 py-3 font-display">ความคิดเห็น</th>
                                            <th className="flex flex-col px-4 py-3 font-display">
                                                <p className="px-4 py-3 font-display">ความพึงพอใจ</p>
                                                <div className="flex flex-row font-display text-xs space-x-2">
                                                    <p className="font-display px-2 py-1 font-semibold leading-tight text-gray-800 bg-red-100 rounded-sm">เนื้อหา</p>
                                                    <p className="font-display px-2 py-1 font-semibold leading-tight text-gray-800 bg-yellow-100 rounded-sm">การสอน</p>
                                                    <p className="font-display px-2 py-1 font-semibold leading-tight text-gray-800 bg-green-100 rounded-sm">การบ้าน</p>
                                                </div>
                                            </th>
                                            <th className="px-4 py-3 font-display">วันที่รีวิว</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {subject_comments.map((comment, index) => (
                                            <Link href={"reviewsubjects/" + comment.subjectId.id} passHref>
                                                <tr className="text-gray-700 hover:bg-gray-400 cursor-pointer">
                                                    <td className="px-4 py-3 border">
                                                        <div className="flex items-center text-sm">
                                                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                                <div className="flex justify-center items-center uppercase font-bold text-lg absolute inset-0 rounded-full shadow-inner bg-blue-200" aria-hidden="true">{comment.subjectId.eng_name[0]}</div>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-black">{comment.subjectId.course_id}</p>
                                                                <p className="text-xs text-gray-600">{comment.subjectId.eng_name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-ms font-semibold border">{comment.comment}</td>
                                                    <td className="px-4 py-3 text-xs border space-x-2">
                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-red-100 rounded-sm"> {comment.content_rate} </span>
                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-yellow-100 rounded-sm"> {comment.lecturer_rate} </span>
                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {comment.homework_rate} </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm border">{comment.createdAt}</td>
                                                </tr>
                                            </Link>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        ) :
                            <p>
                                <div className="flex flex-col justify-center items-center w-full my-10 gap-20">
                                    <div className="text-4xl font-display">ยังไม่มีการรีวิว</div>
                                    <Link href="/reviewsubjects">
                                    <button className="mx-4 mt-6 bg-kmitl-normal hover:bg-kmitl-hover hover:shadow-xl ease-in duration-150 text-gray-50  hover:text-white py-4 border font-display text-sm xl:font-normal  w-1/5  rounded-3xl">
                                        ไปเขียนรีวิวกันเลย
                                    </button>
                                    </Link>

                                </div>
                            </p>
                        }



                    </div>
                </div>
            </section>


        </div>
    );
}

export default UserReview;
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

