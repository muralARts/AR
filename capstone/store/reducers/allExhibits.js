import { statement } from "@babel/template"
import { getNavImage, getExhibitName } from '../../firebase/dbTestComponent'

const initialState = {
      exhibits= [],
}

//action types
const GET_ALL_EXHIBITS = 'GET_ALL_EXHIBITS'


//action creator
const getAllExhibits = (navImage, exhibitName) => {
      type: GET_ALL_EXHIBITS,
      // artworkImage,
      navImage,
      exhibitName
}

//thunk creator
export const gettingAllExhibits = () => {
      return async (dispatch) => {
            const exhibitName = getExhibitName()
            const navImage = getNavImage()
            dispatch(getAllExhibits(artworkImages, navImage))
      }
}


//reducer
export const allExhibitsReducer = (allExhibits=initalState, action) => {
      switch (action.type) {
            case GETALLEXHIBITS:
                  return {...allExhibits, navImage: action.navImage, exhibitName: action.exhibitName}
            default:
                  return allExhibits  
      }
}