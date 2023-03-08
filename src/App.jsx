import { useState } from 'react'
import "../src/scss/app.scss"
import Intro from './components/Intro'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro/>
      <About/>
     <Contact/>
    </div>
  )
}

export default App
