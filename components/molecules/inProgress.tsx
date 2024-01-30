'use client'
import React from 'react'
import DoneReecord from '../atoms/done/doneRecord'
import { Container } from '../atoms/generals/container'
import InProgressRecord from '../atoms/in progress/inProgressRecord'
import { useTodoZustand } from '@/store/todoZustandCreate'
import RevertTimer from '../atoms/in progress/timer'

const InProgressTasks = () => {
  const inProgressTasks = useTodoZustand(state => state.inProgressTasks)
  const setTaskInDone = useTodoZustand(state => state.setTaskInDone)
  const taskInFlow = useTodoZustand(state => state.taskInFlow)
  const isGoingTobeFired = useTodoZustand(state => state.isGoingToBeFired)
  return (
    <Container name="در حال انجام" concatClass='w-full gap-5'>
        {inProgressTasks.map((item,index) => <InProgressRecord handler={setTaskInDone} id={item.id} text={item.name}/>)}
        <div className='w-full'>
        {<RevertTimer Task={taskInFlow} isGoingTobeFired={isGoingTobeFired}/>}
        </div>
    </Container>
  )
}

export default InProgressTasks