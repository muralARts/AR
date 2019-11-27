import { statement } from "@babel/template"

const initialState = {
      exhibits= [],
}

const GETALLEXHIBITS = 'GETALLEXHIBITS'

export const allExhibitsReducer = (allExhibits=initalState, action) => {
      switch (action.type) {
            case GETALLEXHIBITS:
                  return {...allExhibits}
            default:
                  return allExhibits  
      }
}