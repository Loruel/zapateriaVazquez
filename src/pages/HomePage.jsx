import React from 'react'
import Filter from '../components/filter/Filter'
import Promocion from '../components/body/promocion'
import MasVendidos from '../components/body/MasVendidos'
import Footer from '../components/footer/footer'

export default function HomePage() {
  return (
    <div>
      <Filter />
      <Promocion />
      <MasVendidos />
      <Footer />
    </div>

  )
}
