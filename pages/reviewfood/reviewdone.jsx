import React from 'react'
import Link from 'next/Link'
import LogoTechnoInter from "/components/foodreview/technoInter"

export default function reviewdone() {
    return (
        <div className="flex flex-col w-screen h-screen bg-gray-200">
            <LogoTechnoInter></LogoTechnoInter>
            <div className="flex justify-center my-10">
                <div style={{ width: '1000px', height: '650px', backgroundColor: 'white' }} >
                    <div className='flex justify-center '>
                        <div className='flex text-2xl text-white bg-green-500 justify-center rounded-full mt-20' style={{ width: '260px', height: '60px' }}>
                            <div className='flex flex-col justify-center'>บันทึกรีวิวสำเร็จ</div>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <div className='flex text-2xl text-black border-2 border-red-500 justify-center rounded-full mt-20' style={{ width: '300px', height: '70px' }}>
                            <div className='flex flex-col justify-center'>ขอบคุณสำหรับการรีวิว</div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <Link href='/reviewfood'>
                        <button><div className='flex flex-col justify-center bg-red-700 rounded-full text-white' style={{ width: '200px', height: '50px' }}>กลับไปที่หน้ารีวิว</div></button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
