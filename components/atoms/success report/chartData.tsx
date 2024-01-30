import React from "react";
interface Data {
  successPercentage: number;
  allPercentage: number;
}
const ChartData = ({ successPercentage,allPercentage }: Data) => {
  return (
    <div className="font-vazir-adad flex flex-col items-center justify-center w-full " >
      <strong><label className="text-dark whitespace-pre">{successPercentage}  از  {allPercentage}</label></strong>
      <p className="text-gray text-opacity-30 text-sm"> تسک انجام شده است</p>
    </div>
  );
};

export default ChartData;
