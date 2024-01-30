import React, { useEffect, useRef, useState } from 'react'
import { GrRevert } from "@react-icons/all-files/gr/GrRevert";
import { Task, useTodoZustand } from '@/store/todoZustandCreate';
interface Timer{
    Task:Task | null
    isGoingTobeFired:boolean
}
const RevertTimer = ({isGoingTobeFired,Task} : Timer) => {
const [collapsingTime, setCollapsingTime] = useState<number>(10)
const setRevertTaskInProgress = useTodoZustand(state => state.setRevertTaskInProgress)
const setIsGoingToBeFired = useTodoZustand(state => state.setIsGoingToBeFired)
const intervalRef = useRef<any>()
const reverHandler = ()  => {
  setRevertTaskInProgress(Task)
  setIsGoingToBeFired(false)
  setCollapsingTime(10)
  clearInterval(intervalRef.current)


}

 useEffect(() => {
    if (isGoingTobeFired && collapsingTime === 10) {
        intervalRef.current = setInterval(() => setCollapsingTime((prevState) => prevState - 1),1000)
    }
   return () => {
     if(collapsingTime === 0)
       {
           clearInterval(intervalRef.current)
           setIsGoingToBeFired(false)
           setCollapsingTime(10)
           
       }

   }
 }, [isGoingTobeFired,collapsingTime])

  return  (isGoingTobeFired &&
    <div className='h-12 w-full flex flex-row justify-between items-center bg-gray bg-opacity-30'>  
        <span className='font-vazir-adad text-sm text-text mx-5'>
       {`  00:00:${collapsingTime}`}    ثانیه برای بازگرداندن تسک فرصت دارید 
        </span>
        <label onClick={() => reverHandler()} className='mx-5 cursor-pointer'>
        <GrRevert/>
        </label>
    </div>
  )
}

export default RevertTimer