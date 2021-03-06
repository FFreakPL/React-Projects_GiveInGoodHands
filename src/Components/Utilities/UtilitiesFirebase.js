import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    doc,
    getDoc,
    addDoc,
} from "firebase/firestore";
// import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyChz9VCsVuyb7bWzM3niEfkw_yMJ9vr2_g",
    authDomain: "giveingoodhands-12a02.firebaseapp.com",
    projectId: "giveingoodhands-12a02",
    storageBucket: "giveingoodhands-12a02.appspot.com",
    messagingSenderId: "245465048448",
    appId: "1:245465048448:web:16f70785a2b9b1cd7d8d65",
    measurementId: "G-V5HG9YEWP4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const database = getDatabase("https://giveingoodhands-12a02-default-rtdb.europe-west1.firebasedatabase.app/");


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const userCollection = collection(db, "users");
        const payload = {email: email, password: password, userType: "regular"};
        await addDoc(userCollection, payload)

    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
};
export {
    auth,
    db,
    // database,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};