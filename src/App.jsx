import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/banner'
import CoinTable from './Components/CoinTable/CoinTable'

function App() {
  const [currency, setCurrency] = useState('inr')
  return(
    <>
    <Navbar setCurrency= {setCurrency}/>
    <Banner />
    <CoinTable currency={currency}/>
    </>
  )
}

export default App
