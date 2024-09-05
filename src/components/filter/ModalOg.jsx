import React from 'react'
import { useVazquez } from '../../context/VazquezContext'

export default function ModalOg() {
    const { openModal } = useVazquez()

    return (

        openModal && (
            <div className='w-full'>
                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center font-semibold text-lg'>
                        Talla
                    </h1>
                    <div className='grid grid-cols-6 gap-y-2 p-2'>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            23.5
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            24
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            25
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            26
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            23
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            24
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            25
                        </p>
                        <p className='border-black border w-10 h-10 rounded-full text-black flex justify-center items-center'>
                            26
                        </p>
                    </div>
                </div>


                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center font-semibold text-lg'>
                        Color
                    </h1>
                    <div className='grid grid-cols-6 gap-y-2 p-2'>

                        <p className='border-black border w-10 h-10 rounded-full bg-black'>

                        </p>
                        <p className='border-black border w-10 h-10 rounded-full bg-white'>

                        </p>
                        <p className='border-black border w-10 h-10 rounded-full bg-amber-200'>

                        </p>

                    </div>
                </div>


                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center'>
                        Marca
                    </h1>
                    <div className='grid grid-cols-3'>
                        <div className='flex justify-start ml-2 items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Flexi
                            </p>
                        </div>
                        <div className=' flex justify-start ml-2 items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Nike
                            </p>
                        </div>
                        <div className=' flex justify-start ml-2 items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Adidas
                            </p>
                        </div>
                        <div className=' flex justify-start ml-2 items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Brantano
                            </p>
                        </div>
                        <div className=' flex justify-start ml-2 items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Caribu
                            </p>
                        </div>
                        <div className=' flex justify-start ml-2     items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p className='ml-1'>
                                Chabelo
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center mb-2'>
                    <button className='flex justify-center items-center w-1/3 bg-blue-600 rounded-lg'>
                        <p className='text-white text-lg mr-1'>
                            Buscar
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </div>

            </div>
        )

    )
}
