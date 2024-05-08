import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './pages/Landingpage'

import Marquepage from './pages/Marquepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-screen bg-yellow-500'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-600'>Vite + React</h1>
      <div className="card">
        <button className='mybutton' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      <Landingpage/>
      <div className='h-screen width-full bg-slate-500'>We can add some other thing</div>
      <Marquepage/>
    </>
  )
}

export default App
