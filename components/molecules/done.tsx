'use client'
import React from 'react'
import DoneReecord from '../atoms/done/doneRecord'
import { Container } from '../atoms/generals/container'
import { useTodoZustand } from '@/store/todoZustandCreate'

const DoneTasks = () => {
  const doneTasks = useTodoZustand(state => state.doneTasks)
  const setRevertTaskInProgress = useTodoZustand(state => state.setRevertTaskInProgress)


  return (
    <Container name="انجام شده" concatClass='w-full gap-5'>
        {doneTasks.map((item,index) => <DoneReecord handler={setRevertTaskInProgress} id={`doneTask${index}`} text={item.name}/>)}
    </Container>
  )
}

export default DoneTasks