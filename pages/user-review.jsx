import React, { useContext } from 'react'
import { AuthContext } from "../appstate/AuthProvider"
import UserReviewComp from '../components/profilecomp/UserReviewComp'
import Profilelayout from "../components/profilecomp/Profilelayout"
export default function userreview() {
    const { user, signout } = useContext(AuthContext);
    return (
        <>
            <UserReviewComp user={user}></UserReviewComp>
        </>
    )
}
