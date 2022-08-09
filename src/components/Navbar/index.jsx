import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <Link to='/login'>Login</Link>
      <Link to='/NotFound'>NotFound</Link>
      <Link to='/'>Home</Link>
    </>
  )
}
