import React, { useContext } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import UserDropdown from "./userDropdown/UserDropdown";
import LoggedOutUserMenu from "./LoggedOutUserMenu/LoggedOutUserMenu";
import Link from "next/link";
export default function ProjectNav() {
  const { user, signout } = useContext(AuthContext);
  return (
    <div className=" flex bg-gray-100 h-20   w-screen  px-7 py-2 shadow-lg m-0 z-50   ">
      <Link href="/" passHref>
        <div
          className="flex-col align-middle justify-center w-30 h-full   cursor-pointer  ease-in
          duration-150"
        >
          <svg
            width="71"
            height="49"
            viewBox="0 0 71 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.87988 8.31543H3.7793V13H1.14258V0.203125H5.89746C7.40918 0.203125 8.5752 0.540039 9.39551 1.21387C10.2158 1.8877 10.626 2.83984 10.626 4.07031C10.626 4.94336 10.4355 5.67285 10.0547 6.25879C9.67969 6.83887 9.1084 7.30176 8.34082 7.64746L11.1094 12.877V13H8.2793L5.87988 8.31543ZM3.7793 6.17969H5.90625C6.56836 6.17969 7.08105 6.0127 7.44434 5.67871C7.80762 5.33887 7.98926 4.87305 7.98926 4.28125C7.98926 3.67773 7.81641 3.20312 7.4707 2.85742C7.13086 2.51172 6.60645 2.33887 5.89746 2.33887H3.7793V6.17969ZM21.5879 7.4541H16.5254V10.8818H22.4668V13H13.8887V0.203125H22.4492V2.33887H16.5254V5.38867H21.5879V7.4541ZM30.0361 8.54395H25.0879V6.49609H30.0361V8.54395ZM5.87109 25.8271L8.77148 16.2031H11.707L7.25098 29H4.5L0.0615234 16.2031H2.98828L5.87109 25.8271ZM16.9736 29H14.3369V16.2031H16.9736V29ZM28.375 23.4541H23.3125V26.8818H29.2539V29H20.6758V16.2031H29.2363V18.3389H23.3125V21.3887H28.375V23.4541ZM42.0176 25.3086L43.7402 16.2031H46.3682L43.5293 29H40.875L38.792 20.4395L36.709 29H34.0547L31.2158 16.2031H33.8438L35.5752 25.291L37.6846 16.2031H39.917L42.0176 25.3086ZM56.75 23.4541H51.6875V26.8818H57.6289V29H49.0508V16.2031H57.6113V18.3389H51.6875V21.3887H56.75V23.4541ZM65.1631 24.3154H63.0625V29H60.4258V16.2031H65.1807C66.6924 16.2031 67.8584 16.54 68.6787 17.2139C69.499 17.8877 69.9092 18.8398 69.9092 20.0703C69.9092 20.9434 69.7188 21.6729 69.3379 22.2588C68.9629 22.8389 68.3916 23.3018 67.624 23.6475L70.3926 28.877V29H67.5625L65.1631 24.3154ZM63.0625 22.1797H65.1895C65.8516 22.1797 66.3643 22.0127 66.7275 21.6787C67.0908 21.3389 67.2725 20.873 67.2725 20.2812C67.2725 19.6777 67.0996 19.2031 66.7539 18.8574C66.4141 18.5117 65.8896 18.3389 65.1807 18.3389H63.0625V22.1797Z"
              fill="#434343"
            />
            <path
              d="M6.29492 42.7266L4.61914 44.5312V49H1.39648V33.3594H4.61914V40.4492L6.03711 38.5049L10.0225 33.3594H13.9863L8.43262 40.3096L14.1475 49H10.3125L6.29492 42.7266ZM20.8223 33.3594L24.8398 44.7031L28.8359 33.3594H33.0684V49H29.835V44.7246L30.1572 37.3447L25.9355 49H23.7227L19.5117 37.3555L19.834 44.7246V49H16.6113V33.3594H20.8223ZM40.5596 49H37.3369V33.3594H40.5596V49ZM56.2578 35.9697H51.4668V49H48.2441V35.9697H43.5176V33.3594H56.2578V35.9697ZM62.5781 46.4111H69.4209V49H59.3555V33.3594H62.5781V46.4111Z"
              fill="#E35205"
            />
          </svg>
        </div>
      </Link>

      <div className="hidden xl:flex flex-row w-4/6 h-full items-center xl:text-base justify-end ml-12 ">
        <Link href="/reviewsubjects" passHref>
          <h1 className="px-3 font-display font-normal text-gray-600 text-sm md:text-lg hover:text-yellow-500 xl:text-base cursor-pointer ease-in duration-150  ">
            รีวิววิชาเลือก
          </h1>
        </Link>

        <span className="px-3 font-display font-normal text-gray-600 hover:font-semibold  hover:text-yellow-500 cursor-pointer ease-in duration-150 ">
          รีวิวร้านอาหาร{" "}
        </span>
        <h2 className="px-3 font-display font-normal text-gray-600 hover:text-yellow-500 cursor-pointer ease-in duration-150   ">
          รีวิวที่อ่านหนังสือ
        </h2>
      </div>
      <div className="hidden xl:flex flex-row  w-1/6 h-full items-center justify-center xl:text-base ml-12 cursor-pointer ease-in duration-150  ">
        {!user ? (
          <>
            <Link href="/signin" passHref>
              <span className="px-3 font-display  md:text-lg font-normal text-gray-600 mr-1 md:mr-3 xl:mr-5 xl:text-base hover:text-yellow-500 cursor-pointer ease-in duration-150   ">
                เข้าสู่ระบบ
              </span>
            </Link>
            <Link href="/signup" passHref>
              <span className="bg-kmitl-normal  hover:bg-opacity-60 hover:shadow-lg font-display xl:text-base  font-thin text-white py-2 px-6  rounded-full cursor-pointer ease-in duration-150 ">
                ลงทะบียน
              </span>
            </Link>
          </>
        ) : (
          <>
            <UserDropdown user={user} signout={signout}></UserDropdown>
          </>
        )}
      </div>
      <div className="flex xl:hidden flex-row  w-full h-full items-center self-center justify-end ml-12 cursor-pointer ease-in duration-150  ">
        {!user ? (
          <>
            <LoggedOutUserMenu></LoggedOutUserMenu>
          </>
        ) : (
          <>
            <UserDropdown user={user} signout={signout}></UserDropdown>
          </>
        )}
      </div>
    </div>
  );
}

