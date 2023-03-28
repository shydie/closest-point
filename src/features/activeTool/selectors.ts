import { SystemState } from './types'

export const getActiveTool = (state: SystemState) => {
  return state.activeTool.name
}
