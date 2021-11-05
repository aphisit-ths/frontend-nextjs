import { green } from "@material-ui/core/colors";
import { getArgumentValues } from "graphql/execution/values";
import React from "react";
import Link from 'next/Link'
import LogoTechnoInter from "/components/foodreview/technoInter"

import { Height } from "@material-ui/icons";

function addreview() {
    return (

        <div className="flex flex-col w-screen h-screen bg-gray-200">
            <LogoTechnoInter></LogoTechnoInter>

            <div className="flex justify-center my-20">
                <div style={{ width: '1000px', height: '650px', backgroundColor: 'white' }}>
                    <div className='my-5 text-center'>โหวต (รูปดาว 5 ดวง)</div>
                    <div className='text-red-400 text-center'>ให้คะแนนร้านอาหารร้านนี้</div>
                    <div className='flex ml-20 mt-10 text-xl'>เขียนรีวิว <div className='text-red-400 text-2xl '>* </div></div>
                    <div className='flex justify-center'> 
                        <div style={{ width: '800px', height: '280px', backgroundColor: 'rgb(240, 240, 240)',boxShadow: '2px 2px 4px #000000',border: '2px solid rgb(240, 240, 240)',borderRadius: '5px'}}></div>
                    </div>
                    <div className='text-xl ml-20 mt-2'>รูปภาพ</div>
                    <div className='ml-20 mt-0 text-gray-400'>ไฟล์ GIF,JPG หรือ PNG ขนาดมากกว่า 1 Mb</div>
                    <button className='ml-20 mt-2'><div className='w-20 h-6 bg-green-100 rounded-full'>อัพโหลด</div></button>
                    <div className='flex justify-center gap-5 mt-5'>
                        <Link href='/reviewfood'>
                            <button><div className='w-20 h-6 border-2 border-red-500 rounded-full'>ย้อนกลับ</div></button>
                        </Link>
                        <Link href='reviewdone'>
                            <button><div className='w-20 h-6 bg-red-700 rounded-full text-white'>บันทึกรีวิว</div></button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>

    )
}


export default addreview;