import {combineReducers} from 'redux'
import {allExhibitsReducer} from './allExhibits'
import {singleExhibitReducer} from './singleExhibit'

const rootReducer = combineReducers({
      allExhibitsReducer,
      singleExhibitReducer
})

export default rootReducer
