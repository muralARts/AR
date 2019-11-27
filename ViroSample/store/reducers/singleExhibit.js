import Firebase from 'firebase'
import {config} from './firebaseConfig'
import {exhibitsFunc} from '../../firebase/dbTestComponent'


let app = Firebase.initializeApp(config);
export const db = app.database();

var exhibitsRef = db.ref("exhibits")






const initialState = {
      artwork: [],
      coordinates: []
      //may add all details (include navImage and borough) later
}

//action types
const GET_SINGLE_EXHIBIT = 'GET_SINGLE_EXHIBIT'


//create helper function in dbTestComponent that will be called into thunk creator

//action creators
const getSingleExhibit = (artwork, coordinates) => { //both are arrays
      type: GET_SINGLE_EXHIBIT,
      artwork,
      coordinates
}

//thunk creators
export const gettingSingleExhibit = (exhibitName) => {
      return async (dispatch) => {
            //artworks and coordinates
            const artworks = exhibitsFunc()

            //thunk must return as an array to map over
      }
}

//reducer
export const singleExhibitReducer = (singleExhibit=initalState, action) => {
      switch (action.type) {
            case GET_SINGLE_EXHIBIT:
                  return {...singleExhibit, artwork: action.artwork, coordinates: action.coordinates}
      }
      //get artwork
      //get coordinates
}