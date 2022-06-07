import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyDEnEpPG_CK1X_YNS6-O14TzhChYpG2FNk',
  authDomain: 'clone-4f684.firebaseapp.com',
  projectId: 'clone-4f684',
  storageBucket: 'clone-4f684.appspot.com',
  messagingSenderId: '1086479436160',
  appId: '1:1086479436160:web:e6ba2c81a3fd898c4c5965',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }
