import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNkrHEPYhdVyoG3q-e5QTnG5i_mkhM6as",
    authDomain: "my-catch-of-the-day-5ad9b.firebaseapp.com",
    databaseURL: "https://my-catch-of-the-day-5ad9b.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp }

// default export
export default base;