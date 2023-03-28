import { SystemState } from './types'

export const getShapes = (state: SystemState) => state.shapes
export const getShapesNames = (state: SystemState) =>
  state.shapes.map(({ name }) => name)
