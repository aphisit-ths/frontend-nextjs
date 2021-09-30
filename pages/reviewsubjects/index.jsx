import React from 'react'
import SubjectsReviewComponent from '../../components/subject_review'
export default function Subjects_Review() {
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
      homework_rate: [50, 80, 100, 60, 50],
      content_rate: [60, 80, 10, 30, 60],
      lecturer_rate: [50, 60, 80, 60, 80],
    },
    {
      course_id: "90010007",
      eng_name: "Thai Geosocial Design",
      thai_name: "การออกแบบเชิงภูมิสังคมไทย",
    },
    {
      course_id: "90104007",
      eng_name: " Mathematics for Thinking Process Development",
      thai_name: "คณิตศาสตร์เพื่อพัฒนากระบวนการคิด  ",
    },
    {
      course_id: "90593007",
      eng_name: "Series in Daily Life",
      thai_name: "ดูละครแล้วย้อนดูตัว",
    },
    {
      course_id: "90108003",
      eng_name: "Life and Environment",
      thai_name: "ชีวิตกับสิ่งแวดล้อม",
    },
    {
      course_id: "90201017",
      eng_name: "English for Business",
      thai_name: "ภาษาอังกฤษสำหรับธุรกิจ ",
    },
    {
      course_id: "90201029",
      eng_name: "English for Tourism and Travelling",
      thai_name: "ภาษาอังกฤษเพื่อการท่องเที่ยวและการเดินทาง",
    },
    {
      course_id: "90302003",
      eng_name: "Human Relations",
      thai_name: "มนุษยสัมพันธ์",
    },
   
  ];
  return (
    <div>
      <SubjectsReviewComponent subjects={subjects} ></SubjectsReviewComponent>
    </div>
  )
}
