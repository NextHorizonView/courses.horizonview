import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAzIjdXR4C9EPnT4NMg8j97lALoJE_iygI",
    authDomain: "horizonview-c37bd.firebaseapp.com",
    projectId: "horizonview-c37bd",
    storageBucket: "horizonview-c37bd.appspot.com",
    messagingSenderId: "73422689460",
    appId: "1:73422689460:web:058a4f104e7d350994b3e1",
    measurementId: "G-BT42FFN4P9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'students', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email, photoURL, } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error  creating the user', error.message);
        }
    }
    return userDocRef;
}
