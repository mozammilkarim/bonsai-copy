import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import {Router} from "react-router-dom"
import PlanPricing from './components/PlanPricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router>
      
    </Router> */}
    <NavBar/>
    <PlanPricing/>
    </>
  )
}

export default App
