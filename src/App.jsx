import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import Coin from '../src/pages/Coin'

const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/coin/:coinId' element = {<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App