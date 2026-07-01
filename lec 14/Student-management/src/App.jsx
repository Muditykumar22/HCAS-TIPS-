import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './components/studentCard'

function App() {
  const [count, setCount] = useState(0)
//hooks- it is a special function that provides additional features to functional components.
  return (
    <>
    <h1>{count}</h1>
    <button onClick={( ) => setCount(count +1)}>
      Increase
    </button>
    </>
  )
}


export default App
