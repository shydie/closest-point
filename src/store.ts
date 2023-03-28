import { Store, combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { ActiveToolReducer } from './features/activeTool'
import { ShapesReducer } from './features/shapes'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  activeTool: ActiveToolReducer,
  shapes: ShapesReducer,
})

const store: Store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
