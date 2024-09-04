import React from 'react'
import Filter from '../components/filter/Filter'
import MasVendidos from '../components/body/MasVendidos'
import FooterMarcas from '../components/footer/FooterMarcas'
import Redes from '../components/footer/Redes'
import Promocion from '../components/body/Promocion'
import Footer from '../components/footer/Footer'

export default function HomePage() {
  return (
    <div>
      <Filter />
      <Promocion />
      <MasVendidos />
      <Redes />
      <FooterMarcas />
      <Footer />
    </div>

  )
}
