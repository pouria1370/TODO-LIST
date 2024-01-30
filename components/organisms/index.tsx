'use server'
import React from 'react'
import NewTask from '../molecules/newTask';
import DoneTasks from '../molecules/done';
import InProgressTasks from '../molecules/inProgress';
import SuccessReport from '../molecules/successReport';

const Index = () => {

  return (
    <div className='flex flex-col py-6 md:px-44 sm:px-28 gap-4'>
      <div className='flex flex-col md:flex-row gap-4'>
      <div className=' basis-full md:basis-1/2'>
          <SuccessReport />
        </div>
        <div className='basis-full md:basis-1/2'>
          <NewTask />
        </div>
      </div>
      <InProgressTasks />
      <DoneTasks />

    </div>
  )
}

export default Index