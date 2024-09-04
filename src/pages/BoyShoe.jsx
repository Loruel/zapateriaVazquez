import React from 'react'
import { Link } from 'react-router-dom'
import FilterOg from '../components/filter/FilterOg'
import FooterMarcas from '../components/footer/FooterMarcas'
import Redes from '../components/footer/Redes'
import Footer from '../components/footer/Footer'
import Zapatos from '../components/body/Zapatos'

export default function BoyShoe() {
  return (
    <div className='dark:bg-[#3b3b3b]'>
      <div className='relative w-full flex flex-col justify-center items-center h-16'>

        <h1 className='font-semibold dark:text-white'>
          Zapatos de
        </h1>
        <p className='font-bold text-2xl dark:text-white'>
          NIÑO
        </p>

        <Link to={'/'}>
          <button className='absolute bottom-4 left-2 w-8 h-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 dark:stroke-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
            </svg>


          </button>
        </Link>
      </div>

      <div className='flex justify-center items-center w-full p-1 mt-2'>
        <FilterOg />
      </div>



      <Zapatos />


      <Redes />
      <FooterMarcas />
      <Footer />
    </div>
  )
}
