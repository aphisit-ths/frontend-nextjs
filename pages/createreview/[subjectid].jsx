import React,{useContext ,useEffect} from 'react'
import Router from 'next/router';
import { useRouter  } from 'next/router'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Error from "../../components/error/index";
import Loader from "../../components/loader/Loader";
import CreateReview from "./create_review"
import { AuthContext } from '../../appstate/AuthProvider';
const GET_SUBJECT = gql`
  query Subject($subjectid: ID!) {
    subject(id: $subjectid) {
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
    
    const {subjectid} =  router.query
    const {loading , error , data} = useQuery(GET_SUBJECT,{variables:{subjectid}})
  console.log(error)
  if (loading) return <Loader></Loader>
  if (error) return <Error></Error>

  const {subject} = data

    return (
        <div>
            <CreateReview subject={subject} ></CreateReview>
        </div>
    )
}
