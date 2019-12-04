// import React from 'react'
import Firebase from 'firebase'
import {db, config} from '../firebase/firebaseConfig'


// let app = Firebase.initializeApp(config);
// export const db = app.database();

let exhibitsRef = db.ref("exhibits")

//
let biggieExhibitsRef = db.ref("exhibits") //when we add more collections, will we have to add exhibits/fullstack, exhibits/washingtonSquarePark

// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
//     var newPost = snapshot.val()
//     console.log("fullstack borough" + newPost.borough) //returns Manhattan (can only return single value keys)
//     var keys = Object.keys(newPost)
//     var values = Object.values(newPost)
//     console.log('KEYS', keys) //gives 6 keys as an ARRAY
//     console.log('VALUES', values) //gives us all values at each key

//     console.log(newPost, "newpost")// gives all keys (6) as an OBJECT


// })

exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
    let newPost = snapshot.val()
    console.log("fullstack menuImage" + newPost.borough) //returns object object
    let keys = Object.keys(newPost)
    let values = Object.values(newPost)
    console.log('KEYS', keys) //gives artwork, details
    console.log('VALUES', values[0]) //gives us paintings
    console.log(newPost, "newpost")// full object
})

export const getArtwork = () => {
  exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
    let exhibit = snapshot.val()
    let keys = Object.keys(exhibit)
    let values = Object.values(exhibit)
    console.log('VALUES', values[0]) //gives us full paintings
    const paintingObjs = values[0]
    return paintingObjs //returns object
})
}

export const getCoordinates = () => {
  exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
    let exhibit = snapshot.val()
    let values = Object.values(exhibit)
    const coordinates = values[1].coordinates
    return coordinates
  })
}

//gives all images
export const getArtworkImages = () => {
  exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
  let exhibit = snapshot.val()
  let keys = Object.keys(exhibit)
  let values = Object.values(exhibit)
  const paintingObjs = values[0]
  let result = Object.keys(paintingObjs).map(function(key) {
    return [Number(key), paintingObjs[key]];
  });
  const arrayOfArt = []
  for (let i = 0; i < result.length; i++) {
    arrayOfArt.push(result[i][1].image)
  }
  return arrayOfArt
})
}

export const exhibitionsView = async () => {
  try {
    let database = Firebase.database()
    const snapshot = await database.ref('/exhibits/').once('value')
    let keys = Object.keys(snapshot.val())
    let values = Object.values(snapshot.val())
    let exhibitData = []
    for (let i = 0; i < keys.length; i++) {
      exhibitData[i] = {exhibitName: keys[i], navImage: values[i].details.navImage}
    }
    return exhibitData
  } catch (err) {console.error(err)}
}


export const exhibitView = async(exhibitName) => {
  try {
  let database = Firebase.database()
  const snapshot = await database.ref('/exhibits/').once('value')
   let keys = Object.keys(snapshot.val()) //FULLSTACK 1AND FULLSTACK 2
   let singleExhibitData = []
   const instance = snapshot.val()
   const exhibits = Object.keys(instance)
   let selectedExhibit = exhibits.filter(exhibit => exhibit === exhibitName)
     let paintings = instance[selectedExhibit].artwork
     let paintingNames= Object.keys(paintings)
     for (let i = 0; i < paintingNames.length; i++) {
         let selectedPainting = paintings[paintingNames[i]].image
         let selectedMarker = paintings[paintingNames[i]].imageMarker
         singleExhibitData[i] = {target: selectedMarker, source: selectedPainting}
     }
    //  console.error('singleEXHIB', singleExhibitData)
      return singleExhibitData
 } catch(error) {
     console.error(error)
 }
}

//OLD CODE
// export const getNavImage = () => {
//       exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
//       let exhibit = snapshot.val()
//       let keys = Object.keys(exhibit)
//       let values = Object.values(exhibit)
//       let navImageArr=[]
//       for(let i = 0; i < values.length; i++){
//             let innerVal = Object.values(values[1])
//             navImageArr.push(innerVal[2])
//       }
//       return navImageArr
// })
// }

// export const getExhibitName = () => {
//       exhibitsRef.on("value", function(snapshot, prevChildKey) {
//             let exhibit = snapshot.val()
//             let key = Object.keys(exhibit)
//             let exhibitNameArr = []
//             for (let i = 0; i < key.length; i++) {
//                   name = key[i]
//                   exhibitNameArr.push(name)
//             }

//             return exhibitNameArr //returns fullstack
// })
// }

// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      //     var newPost = snapshot.val()
      //     console.log("Biggie" + newPost.biggie) //returns object object
      //     console.log("borough "+ newPost.borough) //gives the value AT borough (manhattan)
      //     console.log("frida" + newPost.frida)//returns object object
      //     console.log("coordinates " + newPost.coordinates) //gave us array
      //     console.log('menuimage' + newPost.menuImage) //gave us png

      // })
