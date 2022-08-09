import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/NotFound'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
