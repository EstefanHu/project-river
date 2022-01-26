import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const clientCredentials = {
    apiKey: "AIzaSyCQAvXtW_v_MGFwDWFcFrNGZSC4S4CPz_o",
    authDomain: "river-3094f.firebaseapp.com",
    projectId: "river-3094f",
    storageBucket: "river-3094f.appspot.com",
    messagingSenderId: "132716726044",
    appId: "1:132716726044:web:4bf4ac5246aedf28bcdcd9"
}

if (!firebase.apps.length) firebases.initializeApp(clientCredentials);

export default firebase;
