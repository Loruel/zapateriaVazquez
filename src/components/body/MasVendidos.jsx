import React from 'react'

export default function MasVendidos() {
    return (
        <div className='w-full p-3'>

            <div className='h-11 flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>
                    Más vendidos
                </h1>
            </div>

            <div className='w-full grid grid-cols-2 gap-x-2 gap-y-2 mt-1'>

                <div className='shadow-gray-400 shadow-lg w-full h-48 rounded-md'>
                    <div className='h-4/5 p-2 '>
                        <img className='w-full p-2 border-gray-200 border-2 rounded-lg'
                            src="/000001.jpg" alt="" />
                    </div>
                    <div className='h-1/5 flex justify-center items-center '>
                        <h1 className=''>
                            Basteri

                        </h1>
                        <h2 className='ml-2'>
                            $650.00

                        </h2>
                    </div>
                </div>

                <div className='shadow-gray-400 shadow-lg w-full h-48 rounded-md'>
                    <div className='h-4/5 p-2 '>
                        <img className='w-full p-2 border-gray-200 border-2 rounded-lg'
                            src="/000001.jpg" alt="" />
                    </div>
                    <div className='h-1/5 flex justify-center items-center '>
                        <h1 className=''>
                            Basteri

                        </h1>
                        <h2 className='ml-2'>
                            $650.00

                        </h2>
                    </div>
                </div>

                <div className='shadow-gray-400 shadow-lg w-full h-48 rounded-md'>
                    <div className='h-4/5 p-2 '>
                        <img className='w-full p-2 border-gray-200 border-2 rounded-lg'
                            src="/000001.jpg" alt="" />
                    </div>
                    <div className='h-1/5 flex justify-center items-center '>
                        <h1 className=''>
                            Basteri

                        </h1>
                        <h2 className='ml-2'>
                            $650.00

                        </h2>
                    </div>
                </div>

                <div className='shadow-gray-400 shadow-lg w-full h-48 rounded-md'>
                    <div className='h-4/5 p-2 '>
                        <img className='w-full p-2 border-gray-200 border-2 rounded-lg'
                            src="/000001.jpg" alt="" />
                    </div>
                    <div className='h-1/5 flex justify-center items-center '>
                        <h1 className=''>
                            Basteri

                        </h1>
                        <h2 className='ml-2'>
                            $650.00

                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
