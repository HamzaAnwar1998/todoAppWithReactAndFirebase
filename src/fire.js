import firebase from 'firebase'

// replace this with your credentials
const firebaseConfig = {
    apiKey: "AIzaSyBel3MhjRUKQu7ogNT2DB-LLB_Un3MNiuA",
    authDomain: "todowithfirebase-64efe.firebaseapp.com",
    databaseURL: "https://todowithfirebase-64efe.firebaseio.com",
    projectId: "todowithfirebase-64efe",
    storageBucket: "todowithfirebase-64efe.appspot.com",
    messagingSenderId: "35986646279",
    appId: "1:35986646279:web:67ee0b60c541e17b8851a2",
    measurementId: "G-6MQ2FRLK7G"
};
// ----------------------------------------//

const fire = firebase.initializeApp(firebaseConfig);
export default fire;