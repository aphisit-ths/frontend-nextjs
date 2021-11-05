import React from "react";

function Modal() {
  return (
    <div>
      <div className=" flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
        <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              ); 
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">
                  Delete Your Acccount ?
                </div>
                <p className="text-sm text-gray-600 leading-none mt-1">
                  By deleting your account you will lose your all data
                </p>
              </div>
            </div>
            <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
