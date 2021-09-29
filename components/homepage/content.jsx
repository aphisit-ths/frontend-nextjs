import React from 'react'

export default function Contents() {
    return (
        <div className=" flex w-screen bg-gray-800 items-start justify-center  xl:items-center p-10 overflow-hidden" id="content">
            <div className="grid grid-rows-3 xl:grid-cols-3 w-2/3 gap-10 p-10 ">
                <div className="flex bg-gray-50 w-1/3 h-1/3  rounded-2xl shadow-2xl" ></div>
                <div className="flex bg-gray-50 rounded-2xl shadow-2xl" ></div>
                <div className="flex bg-gray-50  rounded-2xl shadow-2xl" ></div>
            </div>
        </div>
    )
}
