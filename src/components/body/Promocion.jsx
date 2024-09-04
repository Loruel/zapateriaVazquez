import React from 'react'

export default function Promocion() {
    return (
        <div className='relative w-full h-96 flex justify-center items-center p-5 -mt-2 dark:bg-[#3b3b3b]'>

           {/*  <div className='absolute bottom-32 left-0 bg-yellow-300 w-36 h-6 text-sm flex justify-end items-center'>
                <p className='mr-4'>
                    10% de descuento
                </p>
            </div> */}

            <div className='absolute bottom-24 left-0 bg-red-600 text-white font-semibold w-36 h-9 flex justify-end items-center'>
                <p className='mr-4'>
                    PROMOCIÓN
                </p>
            </div>

            <div className='w-full h-full shadow-black shadow-lg rounded-2xl dark:bg-black '>

                <div className='h-4/5 p-4'>
                    <img className='w-full h-full rounded-xl border-gray-200 border-2 p-4 dark:bg-white'
                        src="/000001.jpg" alt="" />
                </div>

                <div className='h-1/5 flex '>

                    <div className='w-9/12 p-1 -mt-1 dark:text-white'>

                        <h1 className='w-full text-xl font-semibold text-center'>
                            Basteri
                        </h1>

                        <div className='flex justify-center items-end'>
                            <h2 className='h-full text-2xl'>
                                $650.00
                            </h2>
                            <h3 className='h-full line-through ml-2'>
                                $780.00
                            </h3>
                        </div>


                    </div>

                    <div className='w-3/12 flex justify-end items-center mr-3 -mt-2'>
                        <button className='bg-red-600 w-9/12 h-4/6 rounded-md flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
