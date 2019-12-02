import Firebase from 'firebase'
import {db, config} from '../../firebase/firebaseConfig'
import {getArtwork, getCoordinates} from '../../firebase/dbTestComponent'


// let app = Firebase.initializeApp(config);
// export const db = app.database();

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
const getSingleExhibit = (artwork, coordinates) => ({ //both are arrays
      type: GET_SINGLE_EXHIBIT,
      artwork,
      coordinates
})

//thunk creators
export const gettingSingleExhibit = (exhibitName) => {
      return async (dispatch) => {
            //artworks and coordinates
            const artworks = getArtwork() //gives us all artwork info
            const coordinates = getCoordinates() //gives us the coordinates (fullstack)
            dispatch(getSingleExhibit(artworks, coordinates))
      }
}



//reducer
export const singleExhibitReducer = (singleExhibit=initialState, action) => {
      switch (action.type) {
            case GET_SINGLE_EXHIBIT:
                  return {...singleExhibit, artwork: action.artwork, coordinates: action.coordinates}
            default:
                  return singleExhibit
      }

      //get artwork
      //get coordinates
}
