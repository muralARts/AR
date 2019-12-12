# muralArts
developed by: 

Olivia Sztanga
Tawana Howard
Harmony Richman
Windy Sengsatheuane


#Introduction
Did you want to go to Miami this year to see that really expensive banana? Did you spend all of that money and time to get out there only to find out that the banana was already gone?  Well, lucky for you, we’ve thought of a more convenient way for you to view art no matter where you are. 

Our goal at muralARts is to allow people to reimagine spaces and create accessible, immersive art experiences within them. MuralARts is a mobile app that uses augmented reality to display works of art anywhere the imagination allows us, starting with the spaces we are in. 

#Userflow
Our mission is to facilitate a cultural exchange of art that is representative and reflective of all communities. The main functionality of the mobile app is the ability to select a curated exhibition from a menu and use the phone camera to see artwork displayed at pre-set locations through AR. 

The user opens the app to view the home screen and navigates to the list of exhibitions using the “explore exhibitions” button. After selecting an exhibition from the list, the user is redirected to the viewfinder to start viewing artworks in the space. Users can also walk up close to view details they otherwise wouldn’t be able to see at a museum.  Imagine being able to see a painting like the Mona Lisa up close and personal without having to deal with the crowd.

#How We Built It
The tech stack we used for MuralARts is Firebase, React Native, Redux, and Viro Media. We decided to use Firebase realtime database and Google cloud storage to store exhibitions and achieve fast rendering times upon querying. To enable users to select and enjoy multiple experiences, we use Redux to populate the app’s global store with the artworks from selected exhibitions. We used React-Native in order to create a native mobile app and finally, Viro Media gave us an extensive toolkit to customize the AR experience.

#Conclusion
We chose to work with mainly new technologies for this application. In fact, the only part of our tech stack we had prior knowledge of was Redux. As most of the projects we built at Grace Hopper used relational database systems, we chose to work with Firebase, a noSQL database. It was also advantageous for its rapid read times, which we felt was highly desirable for a mobile application. We restructured the initial design of our database schema to achieve accurate database querying for the purposes of anchoring and mapping of artwork.

#We envision that this application will not only be utilized by individuals but will also become a tool for education in the classroom 
