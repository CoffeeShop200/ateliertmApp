import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import './App.css'
import Acceuil from './components/Acceuil'
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Acceuil />
    </>
  )
}

export default App
