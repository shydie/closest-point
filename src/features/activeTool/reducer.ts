/* eslint-disable @typescript-eslint/default-param-last */

import { SET_ACTIVE_TOOL } from './actionTypes'
import { ActiveToolActionTypes } from './types'

type ActiveToolState = {
  name: string | null
}

const initialState: ActiveToolState = {
  name: null,
}

export default (state = initialState, action: ActiveToolActionTypes) => {
  const { type, payload } = action

  switch (type) {
    case SET_ACTIVE_TOOL:
      return { name: payload.name }
    default:
      return state
  }
}
