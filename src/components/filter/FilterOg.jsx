import React from 'react'
import ModalOg from './ModalOg'
import { useVazquez } from '../../context/VazquezContext'

export default function FilterOg() {
  const { toggleModal } = useVazquez()

  return (
    <div className='w-full flex flex-col justify-center items-center border-black border-2 rounded-lg dark:border-white dark:bg-black'>

      <button className='w-full h-4/5 flex justify-center items-center mt-1 mb-1 ' onClick={toggleModal}>
        <p className='dark:text-white'>
          Filtro
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 dark:stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <ModalOg />

    </div>
  )
}
