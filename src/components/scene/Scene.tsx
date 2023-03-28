import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors as shapesSelectors } from 'features/shapes'
import { selectors as activeToolSelectors } from 'features/activeTool'

import { useThree } from '@react-three/fiber'
import Polygon from 'components/polygon'
import { Point, ShapeName } from 'features/shapes/types'
import {
  resetSelectShape,
  selectShape,
  updateShape,
} from 'features/shapes/actions'
import * as THREE from 'three'

const Scene = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const dispatch = useDispatch()
  const shapes = useSelector(shapesSelectors.getShapes)
  const { canDrag, canSelect, showClosestPoint } = useSelector(
    activeToolSelectors.getActiveTool
  )

  const onDragEnd = (name: ShapeName, position: Point) => {
    dispatch(updateShape({ name, position }))
  }

  const onSelect = (name: ShapeName) => {
    dispatch(selectShape(name))
  }

  const handleClickOutside = () => {
    dispatch(resetSelectShape())
  }

  const { gl, camera } = useThree() // get the camera and renderer

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const mouse = new THREE.Vector3()
    mouse.x = (clientX / window.innerWidth) * 2 - 1
    mouse.y = -(clientY / window.innerHeight) * 2 + 1
    mouse.unproject(camera)

    setCursorPosition({ x: mouse.x, y: mouse.y })
  }

  useEffect(() => {
    if (showClosestPoint) {
      gl.domElement.addEventListener('mousemove', handleMouseMove)
    } else {
      gl.domElement.removeEventListener('mousemove', handleMouseMove)
    }

    return () => {
      gl.domElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [gl.domElement, showClosestPoint])

  useEffect(() => {
    if (canSelect) {
      gl.domElement.addEventListener('click', handleClickOutside)
    } else {
      gl.domElement.removeEventListener('click', handleClickOutside)
    }

    return () => {
      gl.domElement.removeEventListener('click', handleClickOutside)
    }
  }, [gl.domElement, canSelect])

  const polygons = shapes.map((shape) => {
    return (
      <Polygon
        key={`polygon-${shape.name}`}
        shape={shape}
        {...(canSelect && { onSelect })}
        {...(showClosestPoint && { cursorPosition })}
        {...(canDrag && { onDragEnd })}
      />
    )
  })
  return <>{polygons}</>
}

export default Scene
