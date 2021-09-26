import React from 'react'

export default function Contents() {
    return (
        <div className=" flex w-screen bg-gray-800 items-start justify-center  xl:items-center p-10 " id="content">
            <div className="grid grid-rows-3 xl:grid-cols-3 gap-10 p-10 ">
                <div className="flex bg-gray-50 p-52 rounded-2xl shadow-2xl" ></div>
                <div className="flex bg-gray-50 p-52 rounded-2xl shadow-2xl" ></div>
                <div className="flex bg-gray-50 p-52 rounded-2xl shadow-2xl" ></div>
            </div>
        </div>
    )
}
