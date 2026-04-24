import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Card name="Kartikey" class="CSE 19" rollno="2025B01010683"/>
     <br/>
      <Card name="John Doe" class="ECE 20" rollno="2025B01010684"/>
    </div>
    </>
  )
}

export default App
