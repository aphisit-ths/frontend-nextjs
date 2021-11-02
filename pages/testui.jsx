import React,{useState} from "react"
import { motion } from "framer-motion"
import LoadComment from "../components/loader/LoadComment";
export default function Loading(props) {
    
    const [loading, setLoading] = useState(false)
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center" >
        <button onClick={() => setLoading(!loading)} className="px-6 py-3 bg-red-200" >Loading ?</button>
           <LoadComment loading={loading} ></LoadComment>
        </div>
    )
}