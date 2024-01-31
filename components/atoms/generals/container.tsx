import React from "react"
import Tag from "./tag"


export const TodoContainer = ({ children, name ,concatClass}: { children: React.ReactElement[] | React.ReactElement, name: String ,concatClass:String}) => {
    const baseClass = "border border-text border-opacity-10  flex flex-col justify-between items-start py-3 px-2 gap-7 "
    return (
        <div
            className={[baseClass,concatClass].join('')} dir="rtl"
        >
            <Tag name={name} />
            {children}
        </div>
    )
}
