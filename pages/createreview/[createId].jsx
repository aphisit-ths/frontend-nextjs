import React,{useContext ,useEffect} from 'react'
import Router from 'next/router';
import { useRouter  } from 'next/router'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Error from "../../components/error/index";
import Loader from "../../components/loader/Loader";
import CreateReview from "../../components/createreviewComponent/create_review"
import { AuthContext } from '../../appstate/AuthProvider';
const GET_SUBJECT = gql`
  query Subject($createId: ID!) {
    subject(id: $createId) {
        id
        course_id
        eng_name
        thai_name
    }
  }
`;
export default function Review() {
  const {user} = useContext(AuthContext);
    
  useEffect(() => {
    if(!user){
      Router.push("/signin")
    }
  }, [])
  
    
    const router = useRouter()
    const {createId} =  router.query
    const {loading , error , data} = useQuery(GET_SUBJECT,{variables:{createId}})
    if (loading) return <Loader></Loader>
    if (error) return <Loader></Loader>
    const {subject} = data
    
    
    return (
        <div>
            <CreateReview subject={subject} ></CreateReview> 
        </div>
    )
}
function VerrySadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c0-7.95 11.49-7.95 11.49 0"
      ></path>
    </svg>
  );
}

function SadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c1.596-4.6 9.894-4.76 11.49 0"
      ></path>
    </svg>
  );
}

function NormalIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.064h11.49"
      ></path>
    </svg>
  );
}

function GoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 17.526c1.596 4.6 9.894 4.76 11.49 0"
      ></path>
    </svg>
  );
}

function VeryGoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 15.073c0 7.95 11.49 7.95 11.49 0"
      ></path>
    </svg>
  );
}
function ErrorMsg() {
  return (
    <div className="flex animate-pulse cursor-pointer mb-6 mx-5 items-center justify-center space-x-3 flex-row w-full h-11  rounded-lg bg-red-400">
      <Icon></Icon>
      <h1 className="text-sm font-light font-display text-gray-100 ">
        พบข้อผิดพลาด ลองไหม่อีกครั้ง
      </h1>
    </div>
  );
}
function ThankMsg() {
  return (
    <div className="flex animate-pulse cursor-pointer mb-6 mx-5 items-center justify-center space-x-3 flex-row w-full h-11  rounded-lg bg-green-500">
      <Icon></Icon>
      <h1 className="text-sm font-light font-display text-gray-100 ">
        ขอบคุณสำหรับการรีวิว 
      </h1>
    </div>
  );
}
function Icon(args) {
  return (
    <div>
      <svg
        {...args}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}