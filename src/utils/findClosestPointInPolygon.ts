import { Point } from 'features/shapes/types'
import * as THREE from 'three'

const findClosestPointInPolygon = (vertices: Point[], point: Point) => {
  const vectors = vertices.map(
    (vertex) => new THREE.Vector3(vertex.x, vertex.y, 0)
  )
  let closestDistance = Infinity
  let closestPoint: THREE.Vector3 | null = null

  for (let i = 0; i < vectors.length; i++) {
    const vectorPoint = new THREE.Vector3(point.x, point.y, 0)

    const v1 = vectors[i]
    const v2 = vectors[(i + 1) % vectors.length]
    const start = new THREE.Vector3(v1.x, v1.y, 0)
    const end = new THREE.Vector3(v2.x, v2.y, 0)
    const line = new THREE.Line3(start, end)
    const closest = line.closestPointToPoint(
      vectorPoint,
      true,
      new THREE.Vector3()
    )
    const distance = closest.distanceTo(vectorPoint)

    if (distance < closestDistance) {
      closestDistance = distance
      closestPoint = closest
    }
  }

  return closestPoint
}

export default findClosestPointInPolygon
