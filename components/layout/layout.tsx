'use client'
import useCashInLocal from '@/actions/clienSideActions/cashInLocal'
import React, { useEffect } from 'react'

const TodoLayout = ({children}:{children:React.ReactNode}) => {
  useCashInLocal()
  return (
    <div>
      {children}
      </div>
  )
}

export default TodoLayout