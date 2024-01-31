'use server'

import React from 'react'
import NewTaskInput from '../atoms/add new task/newTaskInput'
import { TodoContainer } from '../atoms/generals/container'

const NewTask = () => {
  return (
    <TodoContainer name="افزودن تسک جدید" concatClass= "w-full h-full">
   <NewTaskInput/>
   </TodoContainer>
  )
}

export default NewTask