import { useThree } from '@react-three/fiber'
import { Point } from 'features/shapes/types'
import { useState, useEffect } from 'react'
import { BufferAttribute } from 'three'
import findClosestPointOnEdge from 'utils/findClosestPointOnEdge'
import * as THREE from 'three'

const getMeshVertices = (mesh: THREE.Mesh) => {
  const positionAttribute = mesh.geometry.getAttribute(
    'position'
  ) as BufferAttribute
  let vertices: THREE.Vector3[] = []

  for (let i = 0; i < positionAttribute.count; i++) {
    const vertex = new THREE.Vector3()
    const v = vertex.fromBufferAttribute(positionAttribute, i)
    vertices.push(v)
  }

  return vertices
}

const useClosestPoint = (mesh: THREE.Mesh | null, cursorPosition?: Point) => {
  const [closestPoint, setClosestPoint] = useState<THREE.Vector3 | null>(null)
  const { raycaster } = useThree()

  useEffect(() => {
    if (mesh && cursorPosition) {
      const intersects = raycaster.intersectObject(mesh as THREE.Object3D)
      // If inside the shape show cursor position as a point
      if (intersects.length) {
        setClosestPoint(intersects[0].point)
      } else {
        const vertices = getMeshVertices(mesh)
        const polygon = vertices.map(({ x, y }) => ({
          x: x + mesh.position.x,
          y: y + mesh.position.y,
        }))
        // Else find closest point on edge
        const point = findClosestPointOnEdge(polygon, cursorPosition)
        setClosestPoint(point)
      }
    } else {
      setClosestPoint(null)
    }
  }, [mesh, cursorPosition])

  return { closestPoint }
}

export default useClosestPoint
