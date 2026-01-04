
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import'./App.css'
import Header from './components/Header'
import Explore from './components/Explore'
import Events from './Components/Events'

function App() {
 

  return (
    <div >
      <Header></Header>
      <Explore></Explore>
      <Events></Events>
    </div>

  )
}

export default App
