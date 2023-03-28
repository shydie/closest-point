import React from 'react'
import Toolbar from 'components/Toolbar'
import Scene from 'components/scene'
import { Canvas } from '@react-three/fiber'

const App = () => {
  return (
    <main className="container">
      <Toolbar />

      <Scene />
    </main>
  )
}

export default App
