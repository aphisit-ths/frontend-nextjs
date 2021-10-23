import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Contents from "./content";
export default function HomePage() {
  return (
    <div >
      <div className="flex  min-h-screen   justify-center items-start xl:items-center p-5 overscroll-contain bg-white">
        <div className="grid grid-rows-content  xl:grid-cols-2 w-full  gap-1 justify-center  md:items-center h-screen m-5   ">
          <div className="flex items-center sm:items-center sm:justify-center ">
            <div className="px-1 flex flex-col items-center justify-center xl:items-start  ">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                
                className="font-display text-2xl md:text-4xl lg:text-5xl text-gray-600 "
              >
                มาแลกเปลี่ยนประสบการณ์
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="font-display text-sm md:text-2xl lg:text-4xl text-gray-600 "
              >
                ที่เกิดขึ้นรอบรั้ว
                <span className="font-display text-sm md:text-2xl lg:text-4xl text-kmitl-normal ">
                  พระจอมเกล้าลาดกระบัง
                </span>
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className="font-display text-xs  md:text-2xl lg:text-2xl  font-thin text-gray-400 "
              >
                มีอะไรอยากจะมาแนะนำก็อย่ารอช้า...{" "}
              </motion.span>
              <Link href="select-topic" passHref>
                <motion.h1
                  initial={{ opacity: 0, y: 15 ,scale:1.2 }}
                  animate={{ opacity: 1, y: 0 ,scale:1 }}
                  transition={{ duration: 1 }}
                  className=" rounded-xl border-2 border-kmitl-normal text-xs md:text-xl font-light font-display hover:bg-kmitl-normal  text-kmitl-normal hover:text-white px-20 py-4 my-2 cursor-pointer"
                >
                  เริ่มอ่านรีวิว
                </motion.h1>
              </Link>
            </div>
          </div>
          <div className="p-4 rounded">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" flex p-5 bg-yellow-200 xl:w-25 h-90 xl:self-center xl:justify-center rounded-full items-end "
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  y: [1, 2.5, 2, 1],
                }}
                transition={{
                  ease: "linear",
                  repeat: "Infinity ",
                  duration: "3",
                }}
              >
                <Image
                  className=""
                  alt="kmitl"
                  src="https://ouch-cdn2.icons8.com/bv8rsZVWeYALjU5X252t31yZfJRoZKlXklxKga3lGfM/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDU3/LzVjMmYyZmExLWM4/ZTUtNGZiZi05MmVi/LWEwYWNjOWZmOGFk/MC5zdmc.png"
                  width={600}
                  height={600}
                ></Image>
              </motion.div>
            </motion.div>
            <a href="#content">
              <DownIcon className="w-10 h-10"></DownIcon>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

function DownIcon(params) {
  return (
    <svg
      {...params}
      xmlns="http://www.w3.org/2000/svg"
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
