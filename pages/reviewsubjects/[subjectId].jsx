import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Error from "../../components/error/index";
import Loader from "../../components/loader/Loader";
import Review_Subject from "./subject";
const GET_SUBJECT_DETAIL = gql`
  query Subject($subjectId: ID!) {
    subject(id: $subjectId) {
        id
        course_id
        eng_name
        thai_name
        lecturer_rate
        content_rate
        homework_rate
        comments{
            id
            comment
            grade
            section
            year
            owner {
                id
              name
            }
        }
    }
  }
`;
export default function SubjectDetail() {
  const router = useRouter();

  const { subjectId } = router.query;
  const {loading , error , data} = useQuery(GET_SUBJECT_DETAIL,{variables:{subjectId}})
  console.log(error)
  if (loading) return <Loader></Loader>
  if (error) return <Error></Error>
  const { subject } = data;
  
  return (
    <div>
          <Review_Subject subject={subject} ></Review_Subject>
    </div>
  );
}
