import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Food from './food'
import Order from './Order'

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Food/>} />
        <Route path="/Order" element={<Order/>} />
      </Routes>
    </div>
  )
}

export default Navbar
