import { Point } from 'features/shapes/types'
import * as THREE from 'three'

const initShape = (vertices: Point[]) => {
  const shape = new THREE.Shape()

  shape.moveTo(vertices[0].x, vertices[0].y)
  vertices.slice(1).forEach((vertex) => shape.lineTo(vertex.x, vertex.y))
  shape.lineTo(vertices[0].x, vertices[0].y)

  return shape
}

export default initShape
