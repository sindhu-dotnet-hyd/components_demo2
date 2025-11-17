import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ color: "black", fontSize: "20px", backgroundColor: "white",border: "3px solid black"}}>
 
      <HeaderComponent></HeaderComponent>
      <h1> Welcome to components Demo </h1>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
