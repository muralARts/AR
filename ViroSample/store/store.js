import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import {rootReducer} from './reducers'

export default createStore(
      rootReducer,
      composeWithDevToops(applyMiddleware(
            loggingMiddleware
      ))
)