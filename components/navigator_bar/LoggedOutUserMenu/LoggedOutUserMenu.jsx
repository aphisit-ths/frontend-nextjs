import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
export default function UserDropdown() {
  return (
    <div className="text-right z-30 ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full  px-6 py-2 text-sm shadow-md font-medium text-white bg-kmitl-normal rounded-full hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link href="/signin" passHref>
                
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      เข้าสู่ระบบ
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-1 py-1 font-display ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    รีวิวที่วิชาเลือก
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    รีวิวที่อ่านหนังสือ
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <Review className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    รีวิวร้านอาหาร
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Link href="/signup" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-600 text-white " : "text-gray-600"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className=" font-display">ลงทะเบียนผู้ใช้</span>
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function Review(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </svg>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#FFE69C"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFE69C"
        stroke="#FFE69C"
        strokeWidth="2"
      />
    </svg>
  );
}


function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#FFE69C"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#FFE69C"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#FFE69C" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#FFE69C"
        stroke="#FFE69C"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#FFE69C"
        stroke="#FFE69C"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#FFE69C" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#FFE69C" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#FFE69C" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#FFE69C" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#FFE69C" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#FFE69C" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#FFE69C" strokeWidth="2" />
    </svg>
  );
}



function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFE69C"
        stroke="#FFE69C"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#FFE69C" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#FFE69C" strokeWidth="2" />
    </svg>
  );
}

function SignOutIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFE69C"
        stroke="#FFE69C"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}
