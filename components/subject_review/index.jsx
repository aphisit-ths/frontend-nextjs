import React, { useState } from "react";
import { motion } from "framer-motion";
export default function SubjectsReviewComponent({ subjects }) {
  const [filteredData, setFillteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    const newFilter = subjects.filter((value) => {
      return (
        value.course_id.toLowerCase().trim().includes(searchWord.toLowerCase().trim()) ||
        value.eng_name.toLowerCase().trim().includes(searchWord.toLowerCase().trim()) ||
        value.thai_name.toLowerCase().trim().includes(searchWord.toLowerCase().trim())
      );
    });
    if (searchWord === ""){
      setFillteredData([...subjects])
    }else{
      setFillteredData(newFilter);
    }
    
  };
  return (
    <div>
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center p-2 md:p-10">
        <div className="px-5  flex flex-row rounded-xl shadow-md items-center  bg-gray-200  justify-between w-full md:w-1/3 ">
          <input
            className="h-10 font-display text-sm  bg-transparent min-w-2/3 w-2/3 outline-none "
            type="text"
            name=""
            id=""
            placeholder="กรอกรหัสวิชาหรือชื่อวิชา (ไทย/อังกฤษ)"
            onChange={handleFilter}
          />
          <div className="p-2 m-1 bg-yellow-200 rounded-full cursor-pointer hover:bg-gray-500">
            <SrcBtt className="w-6 h-6"></SrcBtt>
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className=" flex flex-col rounded-xl shadow-md overflow-hidden overflow-y-auto w-full md:w-1/3 h-1/3  mx-10 divide-y-1   my-5">
            {filteredData.map((subject, idx) => (
              <>
                <div
                  key={idx}
                  className="flex p-2 px-5 space-x-6 min-h-20 max-h-20 h-20 hover:bg-yellow-200  font-display justify-between cursor-pointer"
                  id="subject"
                >
                  <div className="inline-flex space-x-5 flex-row overflow-hidden ">
                    <p className="font-display font-normal ">
                      {" "}
                      {subject.course_id}{" "}
                    </p>
                    <p className="font-display font-light ">
                      {" "}
                      {subject.thai_name}{" "}
                    </p>
                  </div>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 3 }}
                    transition={{
                      duration: 1,
                      repeat: "Infinity",
                    }}
                  >
                    <RightArrow className="w-6 h-6 stroke-2"></RightArrow>
                  </motion.div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function SrcBtt(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...params}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function RightArrow(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...params}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
