import { initializeApp } from "firebase/app"
// import "firebase/app-check"
// import "firebase/auth"

import firebaseConfig from "./firebase.services.cfg"

// import { getFirestore } from 'firebase/firestore'

// Firebase Firestore
export const firebaseApp = initializeApp(firebaseConfig)

// How to use it?
// import { useFirestore, useCollection } from 'vuefire'
// import { collection } from "firebase/firestore"
//
// const db = useFirestore()
// const joys = useCollection(collection(db, 'joys'))

// const db = getFirestore(firebase)

// const readFromFirebase = async (collectionName) => {
//   const FirebaseCollection = db.collection(collectionName);
// };
