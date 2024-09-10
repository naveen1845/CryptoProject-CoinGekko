import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/banner'
import CoinTable from './Components/CoinTable/CoinTable'

function App() {

  return(
    <>
    <Navbar />
    <Banner />
    <CoinTable />
    </>
  )
}

export default App
