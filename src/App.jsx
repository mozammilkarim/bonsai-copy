import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {Router} from "react-router-dom"
import PlanPricing from './components/PlanPricing'
import Home1 from './components/Home1'
import Footer from './components/Footer'
import Strategy from './components/Strategy'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    {/* <Router>
      
    </Router> */}
    <NavBar/>
    <Home1 id="home"/>
    <PlanPricing/>
    {/* <Strategy/> */}
    <Footer/>
    </ >
  )
}

export default App
