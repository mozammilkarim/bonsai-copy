import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import PlanPricing from './components/PlanPricing'
import Home1 from './components/Home1'
import Footer from './components/Footer'

function App() {
  return (
    < >
    <NavBar/>
    <Home1 id="home"/>
    <PlanPricing/>
    <Footer/>
    </ >
  )
}

export default App
