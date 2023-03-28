import {
  ADD_SHAPE,
  RESET_SELECT_SHAPE,
  SELECT_SHAPE,
  UPDATE_SHAPE,
} from './actionTypes'

export enum ShapeName {
  TRIANGLE = 'triangle',
  SQUARE = 'square',
  HEXAGON = 'hexagon',
}

export type Point = {
  x: number
  y: number
}

export type Shape = {
  name: ShapeName
  polygon: Point[]
  position: Point
  isSelected?: boolean
}

export type AddShapePayload = {
  name: ShapeName
  polygon: Point[]
  position: Point
  isSelected?: boolean
}

export type UpdateShapePayload = {
  name: ShapeName
  polygon?: Point[]
  position?: Point
  isSelected?: boolean
}

export type SelectShapePayload = {
  name: ShapeName
}

export interface AddShapeAction {
  type: typeof ADD_SHAPE
  payload: AddShapePayload
}

export interface UpdateShapeAction {
  type: typeof UPDATE_SHAPE
  payload: UpdateShapePayload
}

export interface SelectShapeAction {
  type: typeof SELECT_SHAPE
  payload: SelectShapePayload
}

export interface ResetSelectShapeAction {
  type: typeof RESET_SELECT_SHAPE
}

export type ShapesActionTypes =
  | AddShapeAction
  | UpdateShapeAction
  | SelectShapeAction
  | ResetSelectShapeAction

export interface SystemState {
  shapes: Shape[]
}
