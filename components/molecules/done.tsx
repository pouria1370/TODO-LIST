'use client'
import React from 'react'
import DoneReecord from '../atoms/done/doneRecord'
import { TodoContainer } from '../atoms/generals/container'
import { useTodoZustand } from '@/store/todoZustandCreate'

const DoneTasks = () => {
  const doneTasks = useTodoZustand(state => state.doneTasks)
  const setRevertTaskInProgress = useTodoZustand(state => state.setRevertTaskInProgress)


  return (
    <TodoContainer name="انجام شده" concatClass='w-full gap-5'>
        {doneTasks.map((item,index) => <DoneReecord key={`doneTask${index}`}  handler={setRevertTaskInProgress} id={`doneTask${index}`} text={item.name}/>)}
    </TodoContainer>
  )
}

export default DoneTasks