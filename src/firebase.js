import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyALvxlohJ9hI7gKyhb2t69vxzCN9Tad9Zg",
    authDomain: "waterlevelmonitor-ca990.firebaseapp.com",
    databaseURL: "https://waterlevelmonitor-ca990-default-rtdb.firebaseio.com",
    projectId: "waterlevelmonitor-ca990",
    storageBucket: "waterlevelmonitor-ca990.appspot.com",
    messagingSenderId: "104980360186",
    appId: "1:104980360186:web:11942dbafb5212e1bb1243",
    measurementId: "G-TZC1HP95KH"
};
firebase.initializeApp(config);
export default firebase;