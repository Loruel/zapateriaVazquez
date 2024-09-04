import React from 'react'
import Zapatos from '../components/body/Zapatos'
import { Link } from 'react-router-dom'
import FilterOg from '../components/filter/FilterOg'

export default function GirlShoe() {
  return (
    <div>
      <div>
        <Link to={'/'}>
          <button className='bg-red-50'>
            Inicio
          </button>
        </Link>
      </div>

      <div className='flex justify-center items-center h-14'>
        <h1 className='font-bold text-xl'>
          Zapatos de niña
        </h1>
      </div>

      <FilterOg />

      <Zapatos />

    </div>
  )
}
