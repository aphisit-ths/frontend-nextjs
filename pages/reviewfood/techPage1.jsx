import React from 'react'
import IconRes from '/components/foodreview/resTech'
import Star from '/components/foodreview/star'
import Link from 'next/link'

export default function techPage1() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className='flex justify-center'>
                <div className="flex flex-row w-4/6 mt-10 rounded-full bg-yellow-200 gap-20">
                    <div><IconRes /></div>
                    <div className='flex justify-center' >
                        <div className='flex flex-col ml-20 '>
                            <div className='flex text-7xl text-yellow-700'>เทคโนอินเตอร์</div>
                            <div className='flex justify-center text-7xl'>Techno Inter</div>
                            <div className='my-5' style={{ border: '1px solid black' }}></div>
                            <div className='flex'>
                                <div className='flex flec-col justify-center gap-2 border-2 border-yellow-500 w-20 rounded-full'>
                                    <div className='mt-1 '><Star></Star></div>
                                    <div>4.0</div>
                                </div>
                                <div className='ml-3 text-xl'>สเต็ก ฟาสต์ฟู้ด/จานด่วนอาหารฟิวชั่น</div>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <Link href='/reviewfood/addreview'>
                                    <button><div className='flex justify-center text-2xl bg-red-500 rounded-full' style={{ width: '150px', height: '50px' }}>
                                        <div className='flex flex-col justify-center text-white'>เขียนรีวิว</div></div></button>
                                </Link>
                            </div>

                            <div className='flex my-5 ml-5' style={{ border: '1px solid white' }}></div>
                            <div className='flex flex-col justify-end text-gray-500'>
                                <div className='flex justify-end gap-5'>
                                    <div classNam='flex text-red-100'>เวลาเปิด-ปิด</div>
                                    <div classNam='flex text-red-100'>จันทร์-ศุกร์  09.00 น. - 19.30 น.</div>
                                </div>
                                <div className='flex justify-end'>เสาร์-อาทิตย์  09.00 น. - 15.00 น.</div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>

        </div>

    )
}
