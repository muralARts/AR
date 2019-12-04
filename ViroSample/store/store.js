import { getFirebase } from 'react-redux-firebase'
import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import rootReducer from '../store/reducers/index'
import thunkMiddleware from 'redux-thunk'
// import { allExhibitsReducer } from '../store/reducers/allExhibits'

export default createStore(
  rootReducer,
  // allExhibitsReducer,
  applyMiddleware(thunkMiddleware)
)
