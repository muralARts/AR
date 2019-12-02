import { getFirebase } from 'react-redux-firebase'
import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import rootReducer from '../store/reducers/index'
import thunkMiddleware from 'redux-thunk'

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)
