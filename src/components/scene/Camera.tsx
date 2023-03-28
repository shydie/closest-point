import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

const SceneWrapper = () => {
  const orthoCam = useRef()
  const { getter, setter } = useThree(({ get, set }) => ({
    getter: get,
    setter: set,
  }))

  useEffect(() => {
    setter({ camera: orthoCam.current! })
  }, [getter, setter])

  return (
    <OrthographicCamera
      ref={orthoCam}
      name="2d"
      position={[0, 0, 1]}
      zoom={150}
      near={0.1}
      far={1000}
      left={window.innerWidth / -2}
      right={window.innerWidth / 2}
      top={window.innerHeight / 2}
      bottom={window.innerHeight / -2}
    />
  )
}

export default SceneWrapper
