import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const clientCredentials = {
    apiKey: "AIzaSyCQAvXtW_v_MGFwDWFcFrNGZSC4S4CPz_o",
    authDomain: "river-3094f.firebaseapp.com",
    projectId: "river-3094f",
    storageBucket: "river-3094f.appspot.com",
    messagingSenderId: "132716726044",
    appId: "1:132716726044:web:4bf4ac5246aedf28bcdcd9"
}

if (!firebase.apps.length) firebase.initializeApp(clientCredentials);

export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
