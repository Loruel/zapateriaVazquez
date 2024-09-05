import React from 'react'
import Redes from '../footer/Redes'
import FooterMarcas from '../footer/FooterMarcas'
import Footer from '../footer/Footer'

export default function ZapatoUnidad() {
    return (
        <>
            <div className='bg-white dark:bg-[#3b3b3b]'>
                <div className='relative w-full h-full flex justify-center items-center p-5 -mt-2  dark:bg-[#3b3b3b]'>

                    <div className='w-full dark:bg-[#3b3b3b] '>

                        <div>
                            <h1 className='w-full text-3xl font-semibold text-center dark:text-white'>
                                Basteri
                            </h1>
                        </div>

                        <div className='h-4/5 p-4'>
                            <img className='w-full h-full rounded-xl border-gray-200 border-2 p-4 dark:bg-white'
                                src="/000001.jpg" alt="" />
                        </div>

                        <div className='h-1/5 flex '>

                            <div className='w-full p-1 -mt-1 flex dark:text-white '>
                                <div className='w-9/12 '>
                                    <h2 className='text-2xl ml-4 w-1/3'>
                                        $650.00
                                    </h2>

                                    <div className='flex w-2/3 items-end ml-4 '>
                                        <p className='text-gray-600 mr-2 dark:text-white'>
                                            Stock
                                        </p>
                                        <div className='flex justify-center items-center border-gray-500 w-3/6 h-3/4 border-2 rounded-lg text-xs text-gray-600 dark:text-white dark:border-white'>
                                            <p>
                                                15
                                            </p>
                                            <p>
                                                pzas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-4/12 flex justify-center items-center'>
                                    <button className='bg-red-600 rounded-md flex justify-center items-center w-5/6 h-4/5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                <div className='p-5'>
                    <h2 className='w-full text-xl font-semibold dark:text-white'>
                        Color
                    </h2>
                    <div className='p-2 grid grid-cols-6 gap-x-2 gap-y-2'>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full bg-black'>

                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full bg-white'>

                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full bg-amber-200'>

                        </p>

                    </div>
                </div>

                <div className='p-5'>
                    <h2 className='w-full text-xl font-semibold dark:text-white'>
                        Tallas
                    </h2>
                    <div className='p-2 grid grid-cols-6 gap-x-2 gap-y-2 '>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            23
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            24
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            25
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            26
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            23
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            24
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            25
                        </p>
                        <p className='border-gray-200 border-2 w-10 h-10 rounded-full text-gray-500 flex justify-center items-center dark:text-white'>
                            26
                        </p>
                    </div>
                </div>

                <div className='p-5'>
                    <p className='text-sm dark:text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                <div className='flex justify-center items-center p-2'>
                    <button className='bg-red-600 w-4/6 h-12 rounded-md flex justify-center items-center'>
                        <p className='text-white font-semibold mr-2'>
                            Añadir al carrito
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </button>
                </div>
            </div>


            <Redes />
            <FooterMarcas />
            <Footer />
        </>
    )
}
