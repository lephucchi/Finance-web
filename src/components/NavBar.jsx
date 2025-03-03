import React from 'react'
import logo from '../assets/logo.jpg'

const NavBar = () => {
  return (
    <div className = "flex flex-row ">
        <img class="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src={logo} alt = "" />
        <ul className = "flex">
          <li class="w-22 flex-none ...">Home</li>
          <li class="w-22 flex-none ...">Features</li>
          <li class="w-22 flex-none ...">Price</li>
          <li class="w-22 flex-none ...">Blog</li>
        </ul>
      <div className = "basis-full">
        <select>
          <option value = "VND">VND</option>
          <option value = "USD">USD</option>
          <option value = "EUR">EUR</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar