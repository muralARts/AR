import { exhibitionsView} from '../../firebase/dbTestComponent'

const initialState = {
      exhibits: [],
}

//action types
const GET_ALL_EXHIBITS = 'GET_ALL_EXHIBITS'


//action creator
export const getAllExhibits = (exhibitData) => ({
      type: GET_ALL_EXHIBITS,
      exhibitData
})

//thunk creator
export const gettingAllExhibits = () => {
  return async (dispatch) => {
    //console.error('exhibitionsView', exhibitionsView())
    const exhibitData = await exhibitionsView()
    //console.error('payload', payload)
    dispatch(getAllExhibits(exhibitData)
    // try passing in the full equation instead of calling exhibitionsView()
    //where is the await??
    //should we throw in a try catch and console.error??
  )}
}

//reducer
export const allExhibitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EXHIBITS:
      //console.error('action.exhibitData: ', action.exhibitData)
      return {...state, exhibits: action.exhibitData}
    default:
      return state
  }
}
