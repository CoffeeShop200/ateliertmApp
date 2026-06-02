import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import './App.css'
import Acceuil from './components/acceuil/Acceuil'
import Navbar from './components/Navbar';
import favicon from './assets/favicon.webp'


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
