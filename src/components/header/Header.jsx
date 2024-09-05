import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='flex w-full h-16 dark:bg-[#3b3b3b]'>
            <Link to={'/'}>
                <div className='w-full h-full ml-2 flex flex-col justify-center'>
                    <h1 className='font-bold text-3xl dark:text-white'>
                        VAZQUEZ
                    </h1>
                    <div className='bg-black -ml-2 w-full flex justify-end items-center -mt-1 dark:bg-white'>
                        <p className='text-white text-xs font-semibold mr-2 dark:text-[#3b3b3b]'>
                            Zapateria
                        </p>
                    </div>
                </div>
            </Link>


            <div className='w-1/2 flex justify-end items-center'>

                <button className='w-8 h-1w-8 flex items-center justify-center mr-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6 dark:stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

                <Link to={'/login'}>
                    <button className='w-8 h-1w-8 flex items-center justify-center mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 dark:stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                </Link>

            </div>
        </div>
    )
}
