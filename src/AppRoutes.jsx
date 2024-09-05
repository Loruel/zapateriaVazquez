import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Navigation from './pages/Navigation'
import HomePage from './pages/HomePage'
import ShoesPage from './pages/ShoesPage'
import WomanShoe from './pages/WomanShoe'
import ManShoe from './pages/ManShoe'
import GirlShoe from './pages/GirlShoe'
import BoyShoe from './pages/BoyShoe'
import LoginPage from './pages/LoginPage'
import CreateAcount from './components/header/CreateAcount'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='woman/' element={<WomanShoe />} />
        <Route path='man/' element={<ManShoe />} />
        <Route path='girl/' element={<GirlShoe />} />
        <Route path='boy/' element={<BoyShoe />} />
        <Route path='shoe/' element={<ShoesPage />} />
        <Route path='login/' element={<LoginPage />} />
        <Route path='createacount/' element={<CreateAcount />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
