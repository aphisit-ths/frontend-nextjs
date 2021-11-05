import { green } from "@material-ui/core/colors";
import { getArgumentValues } from "graphql/execution/values";
import React from "react";
import Link from 'next/Link'
import FoodReview from '/components/foodreview'
import Star from "/components/foodreview/star"

const fakeData = [
  {
    id: 1,
    description: 'Product A',
    imageUrl: "profile.jpg",
    price: 100
  },
  {
    id: 2,
    description: 'Product B',
    imageUrl: "profile.jpg",
    price: 140
  },
]
// .className='w-400 h-400 bg-white shadow-md px-50 py-20'
const bodyBox = { width: '400px', height: '400px', backgroundColor: 'white', boxShadow: '2px 2px 4px gray', paddingLeft: '50px', paddingTop: '20px', border: '5px solid #ddd' }
// .className='w-1000px h-300px bg-white px-20px py-10px shadow-md'
const tailBox = { width: '1000px', height: '300px', backgroundColor: 'white', paddingLeft: '50px', paddingTop: '20px', boxShadow: '2px 2px 4px gray' }
function index() {
  return (
    <div className="flex flex-col w-screen h-screen" id="root">
      <FoodReview></FoodReview>

      <div className='flex justify-center text-red-500 ' style={{width:'2500px'}}>ร้านแนะนำเพิ่มเติม</div>

      <div className='flex flex-nowrap justify-center gap-10'>

        <div className='w-400 h-400 bg-yellow-50 shadow-md px-8 py-8'>เทคโนอินเตอร์ (Techno Inter)
          <div className='text-gray-300'>สเต็ก ฟาสต์ฟู้ด
            <div className='flex gap-10'>
              <div>
                <img src="https://api.lorem.space/image/book?w=150&h=180" />
              </div>
              <div >
                เวลาเปิด-ปิด <br></br>
                ---------------- <br></br>
                จันทร์-ศุกร์ <br></br>
                09.00 น. - 19.30 น.<br></br>
                <br></br>
                เสาร์-อาทิตย์ <br></br>
                09.00 น. - 15.00 น.
              </div>
            </div>
            <div className='c-gray my-5'><hr width='300px'></hr></div>
            <div className='flex my-5 justify-end gap-2'>
              <div className='w-20 h-15 border-2 border-yellow-400 rounded-full mr-2'>
                <div className='flex justify-center pt-2 pr-3 gap-3'><Star /> <div className='text-yellow-500'>4.0</div></div>  
              </div>
              <div style={{ display: 'flex', marginRight: '20px', color: 'white' }}>
                <Link href='reviewfood/techPage1'>
                  <button style={{ marginLeft: '5px',width: '70px', height: '40px',backgroundColor: '#4281a4' }} >ดูหน้าร้าน</button>
                </Link>
                <Link href="reviewfood/addreview">
                  <button style={{ marginLeft: '5px',width: '70px', height: '40px',backgroundColor: '#4281a4' }}>+เพิ่มรีวิว</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>


        <div className='w-400 h-400 bg-yellow-50 shadow-md px-8 py-8'>ข้าวมันไก่ (Rock Chicken)
          <div className='text-gray-300'>อาหารทั่วไป
            <div className='flex gap-10'>
              <div>
                <img src="https://api.lorem.space/image/book?w=150&h=180" />
              </div>
              <div >
                เวลาเปิด-ปิด <br></br>
                ---------------- <br></br>
                จันทร์-ศุกร์ <br></br>
                09.00 น. - 19.30 น.<br></br>
                <br></br>
                เสาร์-อาทิตย์ <br></br>
                09.00 น. - 15.00 น.
              </div>
            </div>
            <div className='c-gray my-5'><hr width='300px'></hr></div>
            <div className='flex my-5 justify-end gap-2'>
              <div className='w-20 h-15 border-2 border-yellow-400 rounded-full mr-2'>
                <div className='flex justify-center pt-2 pr-3 gap-3'><Star /> <div className='text-yellow-500'>4.0</div></div>
              </div>
              <div style={{ display: 'flex', marginRight: '20px', color: 'white' }}>
                <Link href='reviewfood/techPage1'>
                  <button style={{ marginLeft: '5px',width: '70px', height: '40px',backgroundColor: '#4281a4' }} >ดูหน้าร้าน</button>
                </Link>
                <Link href="reviewfood/addreview">
                  <button style={{ marginLeft: '5px',width: '70px', height: '40px',backgroundColor: '#4281a4' }}>+เพิ่มรีวิว</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full h-1000 bg-gray-100 my-20'>
        <div>
          <div className='my-5 mx-20 text-center'>รีวิวจากทางบ้าน</div>

          <div className='flex justify-center items-center gap-10 flex-col my-5'>
            <div className='box1' style={tailBox}>
              <div className='flex justify-end mr-20 text-gray-400'>เมื่อหนึ่งวันที่แล้ว</div>
              <div className='flex gap-20'>
                <div className='flex gap-2'>
                  <div>
                    <img className='rounded-full h-12 w-12 flex items-center justify-center' src="https://api.lorem.space/image/book?w=50&h=40" />
                  </div>
                  <div>
                    <div className='nameUser'>Teeranai</div>
                    <div className='rating'>รีวิว: 5.0 </div>
                  </div>
                  
                </div>
                
                </div>
                  <div className="flex flexDirection-column">
                    <div className='mt-2'><img src="https://api.lorem.space/image/book?w=420&h=180" /></div>
                    <div className='flex justify-start ml-5 mr-5 flex-col w-full h-40 ' >
                      <div className='text-2xl text-center'>เทคโนอินเตอร์(Techno Inter)</div>
                      <div><hr /></div>
                      <div className='flex mt-2'>
                        <p className='break-all'>ผมชอบกินมากเลยครับ เมนูชื่อ ไก่คาราเกะ คือแบบว่ามันสุดโค่ยมากกกก เพิ่งลองรีวิวครั้งแรกนะครับ ให้ดาวผมด้วยนะครับ</p>
                      </div>
                    </div>
                    
                  </div>
              </div>
              <div className='box1' style={tailBox}>
              <div className='flex justify-end mr-20 text-gray-400'>เมื่อหนึ่งวันที่แล้ว</div>
              <div className='flex gap-20'>
                <div className='flex gap-2'>
                  <div>
                    <img className='rounded-full h-12 w-12 flex items-center justify-center' src="https://api.lorem.space/image/book?w=50&h=40" />
                  </div>
                  <div>
                    <div className='nameUser'>Apisit</div>
                    <div className='rating'>รีวิว Star: 4.5 </div>
                  </div>
                  
                </div>
                
                </div>
                  <div className="flex flexDirection-column">
                    <div className='mt-2'><img src="https://api.lorem.space/image/book?w=420&h=180" /></div>
                    <div className='flex justify-start ml-5 mr-5 flex-col w-full h-40 ' >
                      <div className='text-2xl text-center'>ข้าวมันไก่(Rock Chicken)</div>
                      <div><hr /></div>
                      <div className='flex mt-2'>
                        <p className='break-all'>อาหารอร่อย ซาชิมิสดมาก  เซ็ตใหญ่สุดคุ้ม มาส่งฟรีด้วย 30 กิโล สั่ง truffle soup / สปาเนื้อวากิว / แองเจิ้ลแฮร์ชีสทรัฟฟเฟิ้ล / เกาเหลาเนื้อออส / กะเพราเนื้อออส สเต็กวากิว</p>
                      </div>
                    </div>
                    
                  </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      );
}

export default index;
