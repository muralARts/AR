// import React from 'react'
import Firebase from 'firebase'
import {config} from './firebaseConfig'


let app = Firebase.initializeApp(config);
export const db = app.database();

var exhibitsRef = db.ref("exhibits")


// 

var biggieExhibitsRef = db.ref("exhibits") //when we add more collections, will we have to add exhibits/fullstack, exhibits/washingtonSquarePark

exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val()
    console.log("fullstack borough" + newPost.borough) //returns Manhattan (can only return single value keys)
    var keys = Object.keys(newPost)
    var values = Object.values(newPost)
    console.log('KEYS', keys) //gives 6 keys as an ARRAY
    console.log('VALUES', values) //gives us all values at each key
   
    console.log(newPost, "newpost")// gives all keys (6) as an OBJECT
    

})



// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      //     var newPost = snapshot.val()
      //     console.log("Biggie" + newPost.biggie) //returns object object
      //     console.log("borough "+ newPost.borough) //gives the value AT borough (manhattan)
      //     console.log("frida" + newPost.frida)//returns object object
      //     console.log("coordinates " + newPost.coordinates) //gave us array
      //     console.log('menuimage' + newPost.menuImage) //gave us png
      
      // })