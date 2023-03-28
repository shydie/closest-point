import { Shape, ShapeName } from 'features/shapes/types'

const triangle: Shape = {
  name: ShapeName.TRIANGLE,
  polygon: [
    { x: 0, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
  ],
  position: { x: 2, y: 2 },
}

const square: Shape = {
  name: ShapeName.SQUARE,
  polygon: [
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
  ],
  position: { x: -2, y: 2 },
}

const hexagon: Shape = {
  name: ShapeName.HEXAGON,
  polygon: [
    { x: 0, y: 1 },
    { x: 1, y: 0.5 },
    { x: 1, y: -0.5 },
    { x: 0, y: -1 },
    { x: -1, y: -0.5 },
    { x: -1, y: 0.5 },
  ],
  position: { x: 0, y: -2 },
}

export default {
  data: [triangle, square, hexagon],
}
