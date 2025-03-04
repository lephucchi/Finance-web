import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Coin from '../pages/Coin'
import { CoinContext } from '../context/CoinContext'

const NavBar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHadler = (event)=>{
    switch(event.target.value){
      case"usd" :{
        setCurrency({name:"usd" , symbol:"$"})
        break;
      }
      case"eur" :{
        setCurrency({name:"eur" , symbol:"€"})
        break;
      }
      case"vnd" :{
        setCurrency({name:"vnd" , symbol:"₫"})
        break;
      }
      default :{
        setCurrency({name:"usd" , symbol:"$"})
        break;
      }
    }
  }

  return (
    <div className = "flex flex-row justify-center gap-2">
        <img class="mx-auto block h-10 rounded-full sm:mx-0 sm:shrink-0" src={logo} alt = "" />
        <ul className = "flex">
          <li class="w-22 flex-none ...">Home</li>
          <li class="w-22 flex-none ...">Features</li>
          <li class="w-22 flex-none ...">Price</li>
          <li class="w-22 flex-none ...">Blog</li>
        </ul>
      <div className = "basis-full">
        <select onChange={currencyHadler}>
          <option value = "vnd">VND</option>
          <option value = "usd">USD</option>
          <option value = "eur">EUR</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar