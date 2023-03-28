import { SET_ACTIVE_TOOL } from './actionTypes'
import { SetActiveToolAction } from './types'

export const setActiveTool = (name: string): SetActiveToolAction => {
  return {
    type: SET_ACTIVE_TOOL,
    payload: { name },
  }
}
