import { useState } from 'react'

import './App.css'
import welcome from './welcome'
import skill from './skill'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routers> 
      <Route path='/' element={<Home/>}/>
    </Routers>
    <welcome name='virat' country='India'/>
    <skill skill ={['React','Node','express']}/>
    <h1> hello world</h1>
     
    </> 
  )
}

export default App
