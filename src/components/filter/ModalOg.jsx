import React from 'react'
import { useVazquez } from '../../context/VazquezContext'

export default function ModalOg() {
    const { openModal } = useVazquez()

    return (

        openModal && (
            <div className='w-full'>
                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center'>
                        Talla
                    </h1>
                    <div className='flex space-x-5 justify-center'>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                20
                            </p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                21
                            </p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                22
                            </p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                23
                            </p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                24
                            </p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                25
                            </p>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center'>
                        Color
                    </h1>
                    <div className='grid grid-cols-4'>
                        <div className='flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Negro
                            </p>
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Blanco
                            </p>
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Cafe
                            </p>
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Azul
                            </p>
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Rojo
                            </p>
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Verde
                            </p>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-200 rounded-lg m-2 justify-center'>
                    <h1 className='w-full text-center'>
                        Marca
                    </h1>
                    <div className='grid grid-cols-3'>
                        <div className='flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Flexi
                            </p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Nike
                            </p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Adidas
                            </p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Brantano
                            </p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
                                Caribu
                            </p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <input className='border-black border-2' type="checkbox" />
                            <p>
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
