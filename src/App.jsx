import { useState } from 'react'
import Topbar from './components/topbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <Topbar  />
  </div>
  )
}

export default App
