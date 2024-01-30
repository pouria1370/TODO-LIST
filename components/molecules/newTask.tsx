'use server'

import React from 'react'
import NewTaskInput from '../atoms/add new task/newTaskInput'
import { Container } from '../atoms/generals/container'

const NewTask = () => {
  return (
    <Container name="افزودن تسک جدید" concatClass= "w-full h-full">
   <NewTaskInput/>
   </Container>
  )
}

export default NewTask