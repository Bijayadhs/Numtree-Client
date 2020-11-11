import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAjwRD_RPN7Q-cFGmJI0XNDZxvIb-2LcWU",
    authDomain: "jbhifi-d05cc.firebaseapp.com",
    databaseURL: "https://jbhifi-d05cc.firebaseio.com",
    projectId: "jbhifi-d05cc",
    storageBucket: "jbhifi-d05cc.appspot.com",
    messagingSenderId: "846368239756",
    appId: "1:846368239756:web:6cbc1433a7f17026488ba9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = firebase.auth.GoogleAuthProvider();