import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'


export default function Navigation() {
  return (
    <>
      <Header />
      
      <Outlet />
    </>

  )
}
