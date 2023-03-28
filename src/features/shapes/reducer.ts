import { UpdateShapePayload } from './types'
import { Point, Shape, ShapeName } from 'features/shapes/types'
/* eslint-disable @typescript-eslint/default-param-last */

import {
  ADD_SHAPE,
  RESET_SELECT_SHAPE,
  SELECT_SHAPE,
  UPDATE_SHAPE,
} from './actionTypes'
import { ShapesActionTypes } from './types'

const updateProps = (state: ShapeState, props: UpdateShapePayload) => {
  return [
    ...state.map((shape) => {
      return props.name === shape.name
        ? {
            ...shape,
            ...props,
          }
        : shape
    }),
  ]
}

type ShapeState = Shape[]
export default (state: ShapeState = [], action: ShapesActionTypes) => {
  switch (action.type) {
    case ADD_SHAPE: {
      const { name, polygon, position } = action.payload
      return [...state, { name, polygon, position }]
    }

    case UPDATE_SHAPE: {
      return updateProps(state, action.payload)
    }

    case SELECT_SHAPE: {
      return state.map((shape) => {
        return action.payload.name === shape.name
          ? {
              ...shape,
              isSelected: true,
            }
          : {
              ...shape,
              isSelected: false,
            }
      })
    }

    case RESET_SELECT_SHAPE: {
      return state.map((shape) => ({ ...shape, isSelected: false }))
    }

    default:
      return state
  }
}
