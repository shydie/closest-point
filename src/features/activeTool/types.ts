import { SET_ACTIVE_TOOL } from './actionTypes'

export interface SetActiveToolAction {
  type: typeof SET_ACTIVE_TOOL
  payload: {
    name: string
  }
}
export type ActiveToolActionTypes = SetActiveToolAction

export interface SystemState {
  activeTool: {
    name: string
  }
}
