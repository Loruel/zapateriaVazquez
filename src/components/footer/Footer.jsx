import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='flex-1 flex justify-center items-center mt-5'>
        <div className='border-t-2 border-gray-200 w-4/6'></div>
      </div>

      <div className='lg:flex lg:h-16 dark:text-white'>


        <div className='w-full h-10 flex items-center justify-center text-xs lg:h-full '>
          <p>Create by</p>
          <p className='font-bold ml-1'>LLO</p>
          <p className='ml-2'>from</p>
          <p className='font-bold ml-1'>Loruel</p>
        </div>

      </div>

    </>

  )
}
