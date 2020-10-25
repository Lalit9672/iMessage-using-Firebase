import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAMKx5yAO5LTtKSeJnDOS_4ydPypsl_pRw",
    authDomain: "imessage-84cac.firebaseapp.com",
    databaseURL: "https://imessage-84cac.firebaseio.com",
    projectId: "imessage-84cac",
    storageBucket: "imessage-84cac.appspot.com",
    messagingSenderId: "676611238445",
    appId: "1:676611238445:web:06a348e9d518da80fb26a4",
    measurementId: "G-597S5BNL0W"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export default db;
export {auth,provider};