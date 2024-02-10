import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg 
       sm:text-base bg-btnColor text-secondary/50'>
       <div className='w-full h-full z-0 p-32 py-4 flex items-center justify-between lg:flex-col 
       lg:py-6 sm:text-lg sm:p-0'>
        <span>Task by Imversion Technologies</span>

        <div className='flex items-center lg:py-2'>
        Build by&nbsp;
        <Link href='/Home' className='underline underline-offset-2'>Manju</Link>
        </div>
    </div>
    </footer>
  )
}

export default Footer