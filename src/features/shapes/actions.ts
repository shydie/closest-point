import {
  AddShapeAction,
  AddShapePayload,
  ResetSelectShapeAction,
  SelectShapeAction,
  ShapeName,
  UpdateShapeAction,
  UpdateShapePayload,
} from 'features/shapes/types'
import {
  ADD_SHAPE,
  RESET_SELECT_SHAPE,
  SELECT_SHAPE,
  UPDATE_SHAPE,
} from 'features/shapes/actionTypes'

export const addShape = (shape: AddShapePayload): AddShapeAction => {
  return {
    type: ADD_SHAPE,
    payload: shape,
  }
}

export const updateShape = (shape: UpdateShapePayload): UpdateShapeAction => {
  return {
    type: UPDATE_SHAPE,
    payload: shape,
  }
}

export const selectShape = (name: ShapeName): SelectShapeAction => {
  return {
    type: SELECT_SHAPE,
    payload: { name },
  }
}

export const resetSelectShape = (): ResetSelectShapeAction => {
  return {
    type: RESET_SELECT_SHAPE,
  }
}
