import { useTodoZustand } from '@/store/todoZustandCreate'
import React, { useEffect } from 'react'

const useCashInLocal = () => {
  const allInrpogressTasks = useTodoZustand(state => state.inProgressTasks)
  const allDoneTasks = useTodoZustand(state => state.doneTasks)
  useEffect(() => {
    localStorage.removeItem("Done");
    localStorage.removeItem("InProgress");
    localStorage.setItem("Done",JSON.stringify(allDoneTasks));
    localStorage.setItem("InProgress",JSON.stringify(allInrpogressTasks));
  }, [allInrpogressTasks,allDoneTasks])
  
}

export default useCashInLocal