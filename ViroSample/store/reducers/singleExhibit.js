import { exhibitView } from '../../firebase/dbTestComponent'

const initialState = {
      exhibit: []
      //may add all details (include navImage and borough) later
}

//action types
const GET_SINGLE_EXHIBIT = 'GET_SINGLE_EXHIBIT'

//create helper function in dbTestComponent that will be called into thunk creator

//action creators
export const getSingleExhibit = (singleExhibitData) => ({ //both are arrays
      type: GET_SINGLE_EXHIBIT,
      singleExhibitData
})

//thunk creators
export const gettingSingleExhibit = (exhibitName) => {
  return async (dispatch) => {
        const singleExhibitData = await exhibitView(exhibitName)
        // console.error(singleExhibitData)
        dispatch(getSingleExhibit(singleExhibitData))
  }
}

//reducer
export const singleExhibitReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_EXHIBIT:
          // console.error('action:', action.type)
            return {...state, exhibit: action.singleExhibitData}
            // return {exhibit: action.singleExhibitData}
            default:
                return state
      }
}
