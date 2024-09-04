import React from 'react'
import { Link } from 'react-router-dom'

export default function Filter() {
    return (
        <div className='flex justify-center items-center w-full h-20 font-semibold'>

            <Link to={'/woman'}>
                <button className='mr-4'>
                    Mujer
                </button>
            </Link>

            <Link to={'/man'}>
                <button className='mr-4'>
                    Hombre
                </button>
            </Link>

            <Link to={'/girl'}>
                <button className='mr-4'>
                    Niña
                </button>
            </Link>

            <Link to={'/boy'}>
                <button className=''>
                    Niño
                </button>
            </Link>

        </div>
    )
}
