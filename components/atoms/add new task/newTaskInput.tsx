'use client'
import React, { useState } from 'react'
import GeneralButton from '../generals/button'
import VerificationMessage from '../generals/verificationMessage'
import { Task, useTodoZustand } from '@/store/todoZustandCreate'


const NewTaskInput = () => {
  var myregex = new RegExp("^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF 0-9]+$")
  const [isInputValid, setIsInputValid] = useState<boolean | null | undefined>(null)
  const setTaskInProgress = useTodoZustand(state => state.setTaskInProgress)
  const [name, setName] = useState("")

  const submitHandler = (e: any) => {
    'use client'

    e.preventDefault()
    const newTask: Task = { id: `newId${new Date().getSeconds()}`, name }
    if (isInputValid) {
      console.log("hellow");
      ; setTaskInProgress(newTask)
    }
    setName(""),
      setIsInputValid(null)
  }
  const changeHandler = (e: any) => {
    let flagTest = myregex.test(e.target.value)
    if (!e.target.value) return setIsInputValid(null)
    else if (flagTest) { setName(e.target.value); return setIsInputValid(true) }
    else return setIsInputValid(false)
  }

  return (
    <form className='flex flex-row w-full justify-between' dir='rtl' onSubmit={e => submitHandler(e)}>
      <div className='flex flex-col w-full ml-5'>
        <input type='text' onChange={changeHandler} placeholder='امروز میخوام....'
          className='font-vazir-adad text-sm outline-none border px-5 border-text h-9 border-opacity-10 ml-3
         w-full font-thin text-text placeholder-opacity-25' dir='rtl'
         value={name}
         />

        {isInputValid !== null ? isInputValid ? <VerificationMessage successMessage="مقدار وارد شده صحیح می باشد"
          failureMessage={null} /> : <VerificationMessage successMessage={null}
            failureMessage="مقدار وارد شده صحیح نمی باشد خواهشا از فونت پارسی استفاده کنید" /> : null}
      </div>
      <GeneralButton disabled={isInputValid === true ? false : true} size="sm" text='افزودن' type="submit" />
    </form>
  )
}

export default NewTaskInput