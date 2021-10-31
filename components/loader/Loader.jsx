import React from "react";
import { motion } from "framer-motion";
export default function Loader() {
  return (
    <div className="flex justify-center pt-10">
      <div className="bg-gray-50 w-1/2  rounded-xl flex flex-col my-3  p-6 px-2 transition animate-pulse    shadow-lg space-y-3 hover:bg-gray-100  duration-200 ">
       
        <div className="flex justify-start px-2 xl:px-6 my-2 space-x-1  ">
          <div className="flex justify-center items-center font-display text-xs space-x-2 ">
            <motion.div
              initial={{ y: 1 }}
              animate={{ y: [1, 5, 1, 5] }}
              transition={{ duration: 2 }}
              className="rounded-full bg-green-300 hover:bg-green-200 p-2 mr-2 "
            >
              {" "}
            </motion.div>
          </div>
          <div className="flex justify-center items-center font-display text-xs space-x-4 ">
            <motion.div
              initial={{ y: 1 }}
              animate={{ y: [5,1,5,1] }}
              transition={{ duration: 2 }}
              className="rounded-full bg-yellow-300 hover:bg-green-200 p-2 mr-2  "
            ></motion.div>
          </div>
          <div className="flex justify-center items-center font-display text-xs space-x-4 ">
            <motion.div
              initial={{ y: 1 }}
              animate={{ y: [1, 8, 4, 3] }}
              transition={{ duration: 2 }}
              className="rounded-full bg-red-300 hover:bg-green-200 p-2 mr-2  "
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
