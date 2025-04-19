import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="overflow-hidden m-10 flex flex-col items-center">
        <div>
          <h1 className="text-center text-4xl">Game Trial</h1>
        </div> 
        <div className="mt-5">
          <img src="/src/assets/yorigamiShion.png"/>
        </div>
      </div>
    </>
  )
}

export default App
