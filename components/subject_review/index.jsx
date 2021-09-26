import { Subject } from "@material-ui/icons";
import React, { useState } from "react";
import SelectList from "./commentsList";
import DropDown from "./moreDropdown";

export default function Review_Subject() {
  const [like, setLike] = useState(0);
  const subjects = [
    {
      course_id: "90594041",
      eng_name: "การเขียนข้อเสนอโครงการวิจัย",
      thai_name: "Writing Research Proposal",
      comments: [
        {
          comment:
            "มีแต่งงานค่ะ ทุกสัปดาห์ที่เรียน ง่าย แต่มีโปรเจกต์งานที่อาจารย์สุ่มเพื่อนจากต่างคณะด้วยก็ ถ้าได้เพื่อนดีก็จะช่วยทำงาน แต่ถ้าเพื่อนแย่ก็จะรู้สึกแบบเราที่กำลังพิมพ์อยู่ค่ะ แชทหนักขวามากเลย😭 งงทำไมอ่านไม่ตอบ เฮ้อ",
          owner: "โอ๊ตนะครับ",
          grade: "C",
          section: "2",
          year: "2661",
        },
        {
          comment:
            "เป็นวิชาที่เน้น grammar เป็นอย่างมากต้องตรวจคำศัพท์ให้ดีๆ เนื้อหาสามารถนำไปพัฒนาต่อยอดได้ งานส่วนใหญ่จะเป็นงานคู่เป็นการเก็บคะแแนนไปในตัว ส่วนการทำข้อสอบมิดเทอมกับไฟนอลจะต้องแบ่งเวลาทำให้ดีๆ เพราะต้องเขียน essay ใน part สุดท้าย โดยอ. Caroline เป็นคนที่ไม่ flexible กับการตอบคำถามในควิซมากๆ ซึ่งตอนทำควิซครึ่งหนึ่ง คำตอบที่เราใส่ไปเมื่อเช็คกับเพื่อนเซคอื่นๆ เพื่อนก็ตอบแบบที่เราตอบ เมื่อไปสอบถามอ. เราพบว่า อ. ต้องการให้ vocab นี้อยู่ลำดับแรกแล้วตามด้วยคำอื่นๆ",
          owner: "โอ๊ตอีกคน",
          grade: "A",
          section: "2",
          year: "2661",
        },
        {
          comment: "ปวดหัวหน่อย แต่ก็รอดมาได้",
          owner: "โอ๊ตร้างโคลนนิ่ง",
          grade: "A",
          section: "2",
          year: "2661",
        },
        {
          comment: "จารสอนเยี่ยมยอด",
          owner: "โอด",
          grade: "A",
          section: "2",
          year: "2661",
        },
      ],
      homework_rate:[50,80,100,60,50],
      content_rate:[60,80,10,30,60],
      lecturer_rate:[50,60,80,60,80]
    },
    {
      course_id: "90593007",
      eng_name: "Series in Daily Life",
      thai_name: "ดูละครแล้วย้อนดูตัว",
    },
    {
      course_id: "90594041",
      eng_name: "การเขียนข้อเสนอโครงการวิจัย",
      thai_name: "Writing Research Proposal",
      __v: { $numberInt: "0" },
    },
  ];
  //  bg-gradient-to-br  from-yellow-200 via-yellow-300 to-yellow-500 p-2 xl-p-10
  const { comments ,homework_rate ,content_rate ,lecturer_rate} = subjects[0];

  const find_avg = (arr) => {
    return arr.reduce((sum, value) => sum + value, 0) / arr.length;
  };
  const avg_homework = find_avg(homework_rate).toFixed(0);
  const avg_content = find_avg(content_rate).toFixed(0);
  const avg_lecturer = find_avg(lecturer_rate).toFixed(0);

  return (
    <>
      <div className=" flex flex-col bg-gray-800   items-center p-6 ">
        <div className="bg-gray-50 w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10 space-y-3 ">
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6  ">
            <h1 className="font-display font-bold text-lg px-4 py-2   bg-purple-400  rounded-3xl">
              {subjects[0].course_id}
            </h1>
            <h1 className="font-display font-bold text-sm lg:text-lg mx-3 py-2   rounded-3xl">
              {subjects[0].eng_name}
            </h1>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6 my-6  justify-between">
            <h1 className="font-display font-normal text-lg px-4 py-2rounded-3xl ">
              ภาพรวม
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                ไม่พอใจ
              </h1>
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                พอใจ
              </h1>
            </div>
          </div>

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              ภาระงาน/การบ้าน
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200 w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-yellow-400   w-6 py-1  text-white rounded-3xl"
                  style={{ width: `${avg_homework}%` }}
                ></div>
              </div>
              <p> {avg_homework}%</p>
            </div>
          </div>

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light text-sm lg:text-lg px-4 py-2rounded-3xl ">
              เนื้อหาที่สอน
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200  w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-purple-600 text-xs  w-6 py-1  text-white rounded-3xl"
                  style={{ width: `${avg_content}%`}}
                ></div>
              </div>
              <p>{avg_content}%</p>
            </div>
          </div>

          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  justify-between">
            <h1 className="font-display font-light  text-sm lg:text-lg px-4 py-2rounded-3xl ">
              การสอนของอาจารย์
            </h1>
            <div className="flex justify-between w-1/2 items-center">
              <div
                className=" bg-gray-200 text-xs w-6 py-1 px-2 mr-6  text-white rounded-3xl"
                style={{ width: "100%" }}
              >
                <div
                  className=" bg-green-500 text-xs  w-6 py-1  text-white rounded-3xl"
                  style={{width: `${avg_lecturer}%` }}
                ></div>
              </div>
              <p>{avg_lecturer}%</p>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-end justify-end px-2 xl:pl-6 my-6 ">
            <h1 className="font-display font-normal shadow-lg text-lg lg:text-xl my-6 px-16 py-1 rounded-3xl bg-yellow-400 transition ease-in  hover:bg-gray-800 hover:text-gray-50 cursor-pointer  ">
              รีวิว
            </h1>
          </div>
        </div>
        {/* -------------------------commnets section ------------------------------------------------------------*/}
        {comments.map((_comment ,index) => (
          <>
          
            <div key={_comment.owner}   className="bg-gray-50 w-full lg:w-2/5  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10   space-y-3 ">
              <div className=" w-full inline-flex flex-warp font-display  items-center px-2 xl:px-6  ">
                {_comment.comment}
              </div>
              <div   className="min-w-full w-4/6  inline-flex items-center px-2 xl:px-6  my-2   ">
                <p className="text-sm font-display font-light text-gray-400">
                  {" "}
                  โดย {_comment.owner}{" "}
                </p>
              </div>
              <div className="flex justify-between px-6 my-2  ">
                <div className="flex justify-center items-center">
                  <div
                    className="rounded-full bg-green-300 hover:bg-green-200 p-2 mr-2 cursor-pointer "
                    onClick={() => {
                      setLike(like + 1);
                    }}
                  >
                    <Like key={index} className="w-6 h-6 "></Like>
                  </div>
                  {like}
                </div>

                <DropDown  comment={_comment} key={index} ></DropDown>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

function Like(props) {
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
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  );
}
