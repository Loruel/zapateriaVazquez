import React from 'react'

export default function CreateAcount() {
  return (
    <div className='w-full h-screen p-8 dark:bg-[#3b3b3b]'>

      <p className='font-bold text-center text-2xl dark:text-white'>
        Crear cuenta
      </p>

      <div className='mt-5'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2 dark:bg-[#3b3b3b] dark:border-white' type="text " />
        <p className='text-xs dark:text-white'>
          Nombre
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2 dark:bg-[#3b3b3b] dark:border-white' type="text " />
        <p className='text-xs dark:text-white'>
          Apellido
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2 dark:bg-[#3b3b3b] dark:border-white' type="text " />
        <p className='text-xs dark:text-white'>
          Correo
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2 dark:bg-[#3b3b3b] dark:border-white' type="text " />
        <p className='text-xs dark:text-white'>
          Telefono
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl- dark:bg-[#3b3b3b] dark:border-white' type="password " />
        <p className='text-xs dark:text-white'>
          Contraseña
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2 dark:bg-[#3b3b3b] dark:border-white' type="password " />
        <p className='text-xs dark:text-white'>
          Confirmar Contraseña
        </p>
      </div>

      <div className='w-full flex justify-center items-center h-20'>
        <button className='bg-blue-600 w-1/4 h-8 rounded-lg text-white flex justify-center items-center'>
          Crear
        </button>
      </div>

    </div>
  )
}
