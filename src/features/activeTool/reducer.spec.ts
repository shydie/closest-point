import reducer from './reducer'
import { setActiveTool } from './actions'

describe('activeTool reducer', () => {
  const initialState = { name: null }

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle SET_ACTIVE_TOOL', () => {
    const action = setActiveTool('pencil')
    const expectedState = { name: 'pencil' }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should return the current state for unknown action types', () => {
    const currentState = { name: 'eraser' }
    const action = { type: 'unknown' } as any
    expect(reducer(currentState, action)).toEqual(currentState)
  })
})
