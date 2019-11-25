import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyAt9K-Onzxk5y_a5LBJLMglPl9g-8N4Z0U',
  authDomain: 'muralarts-c1fa2.firebaseapp.com',
  databaseURL: 'https://muralarts-c1fa2.firebaseio.com/',
  projectId: 'muralarts-c1fa2',
  storageBucket: 'muralarts-c1fa2.appspot.com',
  messagingSenderId: '317055139662',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
