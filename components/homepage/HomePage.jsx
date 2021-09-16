import React from "react";
import style from "../../styles/homepage.module.scss";
export default function HomePage() {
  return (
    <>
      <div className={style.root}>
        <div className={style.lefthalf}>
          <div className={style.container}>
            <h1>มาแลกเปลี่ยนประสบการณ์</h1>
            <h2>
              ที่เกิดขึ้นรอบรั้ว<span>พระจอมเกล้าลาดกระบัง</span>
            </h2>
            <span>
              ถ้าเกิดคุณอยากอ่านหรือ มีอะไรอยากจะมาแนะนำเราก็อย่ารอช้า มีเพื่อน
              ๆ น้อง ๆ รออ่านอยู่นะ{" "}
            </span>
            <div  className={style.srcbox}>
              <input
                type="text"
                placeholder="วันนี้คุณจะอ่านรีวิวเรื่องไหนดี ?"
              />
            </div>
          </div>
        </div>
        <div className={style.righthalf}>
          <div className={style.img}></div>
        </div>
      </div>
    </>
  );
}
