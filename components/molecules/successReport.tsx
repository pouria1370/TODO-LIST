'use client'
import React from 'react'
import { TodoContainer } from '../atoms/generals/container'
import { SuccessReportChart } from '../atoms/success report/chart'
import ChartData from '../atoms/success report/chartData'
import { useTodoZustand } from '@/store/todoZustandCreate'

const SuccessReport = () => {
const allInrpogressTasks = useTodoZustand(state => state.inProgressTasks)
const allDoneTasks = useTodoZustand(state => state.doneTasks)


  return (
    <TodoContainer name="گزارش موفقیت " concatClass="w-full  h-full">
      <div className='flex flex-row w-full items-center justify-end'>
        <div className='basis-1/2'>
          <SuccessReportChart />
        </div>
        <div className='basis-1/2'>
          <ChartData allPercentage={allInrpogressTasks.length + allDoneTasks.length} successPercentage={allDoneTasks.length} />
        </div>
      </div>
    </TodoContainer>
  )
}

export default SuccessReport