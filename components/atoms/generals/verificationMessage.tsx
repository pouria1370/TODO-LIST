'use client'
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaExclamation } from "@react-icons/all-files/fa/FaExclamation";
import React from 'react'
interface MessageType{
    failureMessage:String | undefined | null,
    successMessage:String | undefined | null
}
const VerificationMessage = ({failureMessage,successMessage}:MessageType) => {
  return (
    !!failureMessage ? <div className="bg-danger bg-opacity-20 text-danger font-vazir-adad text-sm mt-2  p-3 w-full flex flex-row justify-between">
       {failureMessage}
       <FaExclamation/>
    </div> : !!successMessage ? <div className="bg-success bg-opacity-20 text-success font-vazir-adad text-sm mt-2  p-3 w-full flex flex-row justify-between">
        {successMessage}
    <FaCheck/>
    </div> : null
  )
}

export default VerificationMessage