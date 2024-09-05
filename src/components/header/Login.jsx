import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='w-full h-screen p-10 dark:bg-[#3b3b3b]'>
            <div className='w-full h-screen mt-10'>
                <p className='font-bold text-center text-2xl dark:text-white'>
                    Iniciar sesión
                </p>
                <div className='relative mt-4'>
                    <div className='mt-2'>
                        <input className='border-gray-200 border-2 w-full pl-6 rounded-md dark:bg-[#3b3b3b] dark:border-white'
                            type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-2 left-1 size-4 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <p className='dark:text-white'>
                            Usuario
                        </p>
                    </div>

                    <div className='relative mt-4'>
                        <input className='border-gray-200 border-2 w-full pl-6 rounded-md dark:bg-[#3b3b3b] dark:border-white'
                            type="password" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-2 left-1 size-4 dark:stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                        </svg>

                        <p className='dark:text-white'>
                            Contraseña
                        </p>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center h-20'>
                    <button className='bg-blue-600 w-1/3 h-8 rounded-lg text-white flex justify-center items-center'>
                        Ingresar
                    </button>
                </div>


                <div className='mt-5 w-full flex justify-center items-center'>
                    <Link to={'/createacount'}>
                        <p className='text-blue-900 text-sm dark:text-white'>
                            Crear cuenta
                        </p>
                    </Link>
                </div>


            </div>

        </div>
    )
}
