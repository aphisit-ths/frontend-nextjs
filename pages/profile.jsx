import React, { useContext } from 'react'
import { AuthContext } from "../appstate/AuthProvider"
import Profilelayout from "../components/profilecomp/Profilelayout"
export default function profile() {
    const { user, signout } = useContext(AuthContext);
      
        return (
        <div>
            <Profilelayout user={user}></Profilelayout>
        </div>
    )
}