import React, { useRef, useState, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { Point, Shape, ShapeName } from 'features/shapes/types'
import useClosestPoint from './hooks/useClosestPoint'
import colors from 'constants/colors'
import initShape from 'utils/initShape'

type Props = {
  shape: Shape
  cursorPosition?: Point
  onDragEnd?: (name: ShapeName, position: Point) => void
  onSelect?: (name: ShapeName) => void
}

const Polygon = ({ shape, cursorPosition, onDragEnd, onSelect }: Props) => {
  const { name, polygon: vertices, position, isSelected } = shape

  const meshRef = useRef<THREE.Mesh>(null)
  const outlineRef = useRef<THREE.Group>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState([0, 0])
  const [isHovered, setIsHovered] = useState(false)

  const newShape = useMemo(() => {
    return initShape(vertices)
  }, [vertices])

  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto'
  }, [isHovered])

  const { closestPoint } = useClosestPoint(
    meshRef.current,
    vertices,
    cursorPosition
  )

  // Define available interactive actions depend on passed handlers
  const canDrag = !!onDragEnd
  const canSelect = !!onSelect
  const hasClosestPoint = cursorPosition && closestPoint
  const outlineGeometry = new THREE.BufferGeometry().setFromPoints(
    vertices.map(({ x, y }) => new THREE.Vector2(x, y))
  )

  // Handle drag start
  function handlePointerDown(event: THREE.Event) {
    if (canDrag && !isDragging) {
      setIsDragging(true)
      const [x, y] = event.intersections[0].point.toArray()
      setOffset([
        x - meshRef.current!.position.x,
        y - meshRef.current!.position.y,
      ])
    }
  }

  // Handle drag end
  function handlePointerUp() {
    setIsDragging(false)

    if (canDrag) {
      // Update the store when the drag ends to avoid unnecesary recomputations
      onDragEnd(name, meshRef.current!.position)
    }
  }

  // Handle drag process
  function handleDrag(event: THREE.Event) {
    if (isDragging) {
      const [x, y] = event.intersections[0].point.toArray()
      const newPosition = { x: x - offset[0], y: y - offset[1] }

      // Update the position of the mesh
      meshRef.current!.position.set(newPosition.x, newPosition.y, 0)
      outlineRef.current!.position.set(newPosition.x, newPosition.y, 0)
    }
  }

  function handleSelect() {
    if (onSelect) {
      onSelect(name)
    }
  }

  function handlePointerOver() {
    setIsHovered(true)
  }

  function handlePointerOut() {
    setIsHovered(false)
  }

  function getFillColor() {
    return isSelected
      ? colors.red100
      : isHovered
      ? colors.blue100
      : colors.gray100
  }

  function getOutlineColor() {
    return isSelected ? colors.red200 : colors.blue200
  }

  return (
    <>
      <mesh
        {...(canDrag && {
          onPointerDown: handlePointerDown,
          onPointerUp: handlePointerUp,
          onPointerMove: handleDrag,
        })}
        {...(canSelect && {
          onClick: handleSelect,
        })}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={new THREE.Vector3(position.x, position.y, 0)}
        ref={meshRef}
      >
        <shapeGeometry args={[newShape]} />
        <meshBasicMaterial color={getFillColor()} />
      </mesh>
      <group
        ref={outlineRef}
        position={new THREE.Vector3(position.x, position.y, 0)}
      >
        <lineLoop geometry={outlineGeometry}>
          <lineBasicMaterial color={getOutlineColor()} />
        </lineLoop>
      </group>
      {hasClosestPoint && (
        <mesh position={[closestPoint.x, closestPoint.y, 0]}>
          <sphereGeometry args={[0.1]} />
          <meshBasicMaterial color={colors.red200} />
        </mesh>
      )}
    </>
  )
}

export default Polygon
