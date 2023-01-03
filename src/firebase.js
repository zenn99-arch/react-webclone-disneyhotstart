import firebase from './firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD6bGs6ctjgzykhCCeHz-7c5Tt-UYq0eMI",
  authDomain: "disney-clone-3e6e5.firebaseapp.com",
  projectId: "disney-clone-3e6e5",
  storageBucket: "disney-clone-3e6e5.appspot.com",
  messagingSenderId: "555404587206",
  appId: "1:555404587206:web:048a05e4a226eb909367c7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestorm();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;