import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/banner'

function App() {
  return(
    <>
    <Navbar />
    <Banner />
    
    <p >Coin Table</p>
    </>
  )
}

export default App
