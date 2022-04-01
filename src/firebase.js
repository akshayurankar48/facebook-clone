import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4OTyuzlZcMwZ8gA2ckulxIYzNg1hAr9U",
  authDomain: "facebook-clone-yt-f37d1.firebaseapp.com",
  projectId: "facebook-clone-yt-f37d1",
  storageBucket: "facebook-clone-yt-f37d1.appspot.com",
  messagingSenderId: "206771435477",
  appId: "1:206771435477:web:e1c47c7aa6b9f61921af5c",
  measurementId: "G-YBMTT779DE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig); // to connect react front end to firebase backend.
const db = firebaseApp.firestore();
const auth = firebase.auth(); // for loggin in
const provider = new firebase.auth.GoogleAuthProvider(); // for google login service

export { auth, provider };
export default db;
