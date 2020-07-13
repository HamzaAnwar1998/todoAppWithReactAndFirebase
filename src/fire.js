import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyDpj3UAAuWs4mb0LR5wEOc2JlkZ4_Wb-cA",
//     authDomain: "fir-withreact-fb164.firebaseapp.com",
//     databaseURL: "https://fir-withreact-fb164.firebaseio.com",
//     projectId: "fir-withreact-fb164",
//     storageBucket: "fir-withreact-fb164.appspot.com",
//     messagingSenderId: "969602719178",
//     appId: "1:969602719178:web:39b537826f701a05350333",
//     measurementId: "G-542P0EC578"
// };

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

const fire = firebase.initializeApp(firebaseConfig);
export default fire;