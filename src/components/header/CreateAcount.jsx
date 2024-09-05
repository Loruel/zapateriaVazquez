import React from 'react'

export default function CreateAcount() {
  return (
    <div className='w-full h-screen p-8'>

      <p className='font-bold text-center text-2xl'>
        Crear cuenta
      </p>

      <div className='mt-5'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="text" />
        <p className='text-xs'>
          Nombre
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="text" />
        <p className='text-xs'>
          Apellido
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="text" />
        <p className='text-xs'>
          Correo
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="text" />
        <p className='text-xs'>
          Telefono
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="password" />
        <p className='text-xs'>
          Contraseña
        </p>
      </div>
      <div className='mt-2'>
        <input className='w-full border-gray-200 border-2 rounded-lg pl-2' type="password" />
        <p className='text-xs'>
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
