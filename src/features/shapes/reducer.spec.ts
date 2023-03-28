import reducer from './reducer'
import * as actions from './actions'
import { Shape, ShapeName } from 'features/shapes/types'

describe('shapes reducer', () => {
  const name1 = ShapeName.HEXAGON
  const polygon1 = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 10, y: 10 },
    { x: 0, y: 10 },
  ]
  const position1 = { x: 0, y: 0 }
  const name2 = ShapeName.TRIANGLE
  const polygon2 = [
    { x: 0, y: 0 },
    { x: 5, y: 5 },
    { x: 5, y: 0 },
  ]
  const position2 = { x: 10, y: 10 }

  const shape1: Shape = { name: name1, polygon: polygon1, position: position1 }
  let shape2: Shape = { name: name2, polygon: polygon2, position: position2 }

  const initialState: Shape[] = []

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle ADD_SHAPE', () => {
    const action = actions.addShape(shape1)
    const expectedState: Shape[] = [shape1]
    expect(reducer(undefined, action)).toEqual(expectedState)
  })

  it('should handle UPDATE_SHAPE', () => {
    const action = actions.updateShape({
      name: name1,
      polygon: polygon2,
      position: position2,
    })
    const expectedState: Shape[] = [
      { ...shape1, polygon: polygon2, position: position2 },
    ]
    expect(reducer([shape1], action)).toEqual(expectedState)
  })

  it('should handle SELECT_SHAPE', () => {
    const action = actions.selectShape(name1)
    const expectedState: Shape[] = [{ ...shape1, isSelected: true }]
    expect(reducer([shape1], action)).toEqual(expectedState)
  })

  it('should handle RESET_SELECT_SHAPE', () => {
    shape2 = {
      name: name2,
      polygon: polygon2,
      position: position2,
      isSelected: true,
    }
    const action = actions.resetSelectShape()
    const expectedState: Shape[] = [
      { ...shape1, isSelected: false },
      { ...shape2, isSelected: false },
    ]
    expect(reducer([shape1, shape2], action)).toEqual(expectedState)
  })

  it('should return the current state for unknown action types', () => {
    const currentState: Shape[] = [shape1]
    const action = { type: 'unknown' } as any
    expect(reducer(currentState, action)).toEqual(currentState)
  })
})
