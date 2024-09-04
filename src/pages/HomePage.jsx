import React from 'react'
import Filter from '../components/filter/Filter'
import MasVendidos from '../components/body/MasVendidos'
import Footer from '../components/footer/footer'
import FooterMarcas from '../components/footer/FooterMarcas'
import Redes from '../components/footer/Redes'
import Promocion from '../components/body/promocion'

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
