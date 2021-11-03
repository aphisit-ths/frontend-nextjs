import React,{useContext ,useEffect} from 'react'
import Router from 'next/router';
import { useRouter  } from 'next/router'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Error from "../../../../components/error/index";
import Loader from "../../../../components/loader/Loader";
import CreateReview from '../../../../components/createreviewComponent/create_review';
import { AuthContext } from '../../../../appstate/AuthProvider';

const GET_SUBJECT = gql`
  query Subject($subjectId: ID!) {
    subject(id: $subjectId) {
        id
        course_id
        eng_name
        thai_name
    }
  }`;
export default function Review() {

    const route = useRouter()
    const {subjectId} = route.query;
    const {loading , error , data} = useQuery(GET_SUBJECT,{variables:{subjectId}})
    if (loading) return <Loader></Loader>
    if (error) return <Loader></Loader>
    const {subject} = data
    return (
        <div>
            <CreateReview subject={subject} ></CreateReview>
        </div>
    )
}
