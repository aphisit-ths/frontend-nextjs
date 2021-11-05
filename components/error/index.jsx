import React from "react";
import Link from "next/link"
import Image from "next/image"
function Error() {
  return (
    <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 min-h-full h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20"></div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl font-display  text-yellow-500 mb-10">
              ขออภัยในความไม่สะดวก
            </h1>
            <p className="font-display font-light " >ขณะนี้เชิฟเวอร์มีปัญหา</p>
            <p className="font-display font-light" >ทางทีมงานกำลังดำเนินการแก้ใข หากสถาณการณ์กลับมาปกติจะแจ้งให้ท่านทราบโดยเร็วที่สุด.</p>
            
          </div>
          <Link href="/" passHref>
          <div className="mb-20 md:mb-0">
            <button className="text-lg font-display font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">
              <i className="mdi mdi-arrow-left mr-2"></i>กลับไปหน้าแรก
            </button>
          </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 z-50 text-center animate-pulse">
            <Image alt="img" width="1200" height="900" src="https://ouch-cdn2.icons8.com/Os6tNsk0N3aEigCmLkEYHphSkCC-HgQ52gEOFdU8V74/rs:fit:1216:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTYv/NDQyOWY4NjEtNzM2/OC00MzVkLWI3MTUt/N2VjYzYyZjkyNTYw/LnN2Zw.png" ></Image>
        </div>
      </div>
      {/* <div className="w-64 md:w-96 z-0 h-96 md:h-full bg-yellow-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div> */}
      {/* <div className="w-96 h-full z-10 bg-blue-200  bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div> */}
    </div>
  );
}

export default Error;
