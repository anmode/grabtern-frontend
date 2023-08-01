import React from 'react'
import { BiSolidUser } from 'react-icons/bi'

const Home = () => {
  return (
    <>
      <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-ml-[10rem] tw-py-10'>
        <header className='tw-flex tw-flex-col tw-justify-between tw-items-center tw-gap-8'>
          <div className='tw-flex tw-justify-around tw-gap-[580px]'>
            <h1 className='tw-text-4xl tw-font-bold'>Your dashboard!</h1>
            <p className='tw-flex tw-justify-center tw-gap-2 tw-bg-[#00C9A7] hover:tw-bg-primary-100 tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-in-out tw-p-2 tw-rounded-md tw-items-center'>
              <h2 className='tw-font-semibold'>Welcome User</h2>
              <BiSolidUser className='tw-w-7 tw-h-7 tw-text-[#FBEAFF]' />
            </p>
          </div>
          <div className='tw-flex tw-justify-center tw-items-center '>
            <p className='tw-text-xl'>Here you can view your sessions, edit your profile, and view your calendar.</p>
          </div>
        </header>
      </div>
    </>
  )
}

export default Home