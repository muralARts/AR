// import React from 'react'
import Firebase from 'firebase'
import {config} from './firebaseConfig'


let app = Firebase.initializeApp(config);
export const db = app.database();

var exhibitsRef = db.ref("exhibits")


// 

var biggieExhibitsRef = db.ref("exhibits") //when we add more collections, will we have to add exhibits/fullstack, exhibits/washingtonSquarePark

// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
//     var newPost = snapshot.val()
//     console.log("fullstack borough" + newPost.borough) //returns Manhattan (can only return single value keys)
//     var keys = Object.keys(newPost)
//     var values = Object.values(newPost)
//     console.log('KEYS', keys) //gives 6 keys as an ARRAY
//     console.log('VALUES', values) //gives us all values at each key
   
//     console.log(newPost, "newpost")// gives all keys (6) as an OBJECT
    

// })

export const exhibitsFunc = () => {exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
    var fullstack = snapshot.val()
    console.log("fullstack artwork", fullstack.artwork) //returns [biggie, frida, obama]
    console.log("fullstack details", fullstack.details) //returns [borough, coordinates, navImage]
    var keys = Object.keys(fullstack) //artwork, details
    var values = Object.values(fullstack) //values at artwork,details
    console.log('KEYS', keys) //gives 2 keys as an ARRAY
    console.log('VALUES', values) //gives us all values at each key
   for (let i = 0; i < keys.length; i++) {
         let artworks = keys[0]//array of objects
         let details = keys[1]//array
         let coordinates = keys[1].coordinates
          for (let j = 0; j < artworks.length; j++){
                let artwork = artworks[j]

          }
   }
    

})
}



// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      //     var newPost = snapshot.val()
      //     console.log("Biggie" + newPost.biggie) //returns object object
      //     console.log("borough "+ newPost.borough) //gives the value AT borough (manhattan)
      //     console.log("frida" + newPost.frida)//returns object object
      //     console.log("coordinates " + newPost.coordinates) //gave us array
      //     console.log('menuimage' + newPost.menuImage) //gave us png
      
      // })