import React from "react";

interface Button{
    text:string,
    handler?:(v:any) => {},
    size: String,
    type:"submit" | "button",
    disabled:boolean
}
const GeneralButton = ({ text, handler, size,type,disabled }:Button) => {
  return (
    <button
    disabled={disabled}
      name="submit"
      className={
        size == "md" 
          ? "rounded-md disabled:bg-gray disabled:bg-opacity-30  text-sm w-[200px] h-[35px] flex flex-col items-center justify-center  font-vazir hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
          : size == "sm"
          ? "rounded-md disabled:bg-gray disabled:bg-opacity-30  text-xs w-[100px]  h-[25px] flex flex-col items-center justify-center   font-vazir hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
          : "rounded-md disabled:bg-gray disabled:bg-opacity-30 text-xl w-[300px] font-vazir flex flex-col items-center justify-center  h-[45px] hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
      }
      onClick={handler}
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default GeneralButton;
