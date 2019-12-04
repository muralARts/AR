import {combineReducers} from 'redux'
import {allExhibitsReducer} from '../reducers/allExhibits'
import {singleExhibitReducer} from '../reducers/singleExhibit'

const rootReducer = combineReducers({
      allExhibitsReducer,
      singleExhibitReducer
})

export default rootReducer
