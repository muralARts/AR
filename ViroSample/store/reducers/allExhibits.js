import { statement } from "@babel/template"

const initialState = {
      exhibits= [],
}

//action types
const GET_ALL_EXHIBITS = 'GET_ALL_EXHIBITS'


//action creator
const getAllExhibits = (artworkImage, navImage) => {
      type: GET_ALL_EXHIBITS,
      artworkImage,
      navImage
}

//thunk creator
export const allExhibitsReducer = (allExhibits=initalState, action) => {
      switch (action.type) {
            case GETALLEXHIBITS:
                  return {...allExhibits}
            default:
                  return allExhibits  
      }
}