import { SystemState } from './types'

export const getActiveTool = (state: SystemState) => {
  const { name } = state.activeTool
  const canDrag = name === 'drag'
  const canSelect = name === 'select'
  const showClosestPoint = name === 'closestPoint'
  return {
    canDrag,
    canSelect,
    showClosestPoint,
  }
}

export const getActiveToolName = (state: SystemState) => state.activeTool.name
