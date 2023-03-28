import { useThree } from '@react-three/fiber'
import { Point } from 'features/shapes/types'
import { useState, useEffect } from 'react'
import findClosestPointOnEdge from 'utils/findClosestPointOnEdge'

const useClosestPoint = (
  mesh: THREE.Mesh | null,
  vertices: Point[],
  cursorPosition?: Point
) => {
  // Calculate closest point
  const [closestPoint, setClosestPoint] = useState<THREE.Vector3 | null>(null)
  const { raycaster } = useThree()

  useEffect(() => {
    if (mesh && cursorPosition) {
      const intersects = raycaster.intersectObject(mesh as THREE.Object3D)
      const polygon = vertices.map(({ x, y }) => ({
        x: x + mesh.position.x,
        y: y + mesh.position.y,
      }))
      // If inside the shape show cursor position as a point
      if (intersects.length) {
        setClosestPoint(intersects[0].point)
      } else {
        // Else find closest point
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
