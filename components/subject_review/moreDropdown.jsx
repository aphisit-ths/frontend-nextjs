import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function DropDown({ comment ,index }) {
  return (
    <div key={index} className="bg-gray-200 rounded-xl shadow-sm flex justify-center items-center ">
      <Menu as="div" className=" inline-block text-left">
        <div className="rounded-sm  ">
          <Menu.Button className="flex flex-row px-3 ">
            <p className="font-display text-sm">เพิ่มเติม </p>
            <Down className="w-4 h-3"></Down>
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
          <Menu.Items className="absolute m-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className="text-gray-900 group flex rounded-md items-center w-full px-5 py-2 text-xs font-display">
                    เกรดที่ได้ : {comment.grade}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className="text-gray-900 group flex rounded-md items-center w-full px-5 py-2 text-xs md:text-sm font-display">
                    ปี : {comment.year}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className="text-gray-900 group flex rounded-md items-center w-full px-5 py-2 text-xs font-display">
                    section : {comment.section}
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className="text-red-500 group flex rounded-md items-center w-full px-5 py-2 text-xs font-display">
                    แจ้งลบ
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
function Down(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}