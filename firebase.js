// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDswJiVkLbBHASFcCBnb1w61ihvYiBsMDA",
  authDomain: "jjaturi-d75ad.firebaseapp.com",
  projectId: "jjaturi-d75ad",
  storageBucket: "jjaturi-d75ad.appspot.com",
  messagingSenderId: "172009910219",
  appId: "1:172009910219:web:80db071e186d87ca70104e",
  measurementId: "G-H75F75BTTD",
};

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firestore };
export { auth };
export { storage };
