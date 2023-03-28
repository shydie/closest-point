import React from 'react'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import Camera from './Camera'

const SceneWrapper = () => {
  return (
    <Canvas>
      <Camera />
      <Scene />
    </Canvas>
  )
}

export default SceneWrapper
