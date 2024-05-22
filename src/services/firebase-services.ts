import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// import "firebase/app-check"
// import "firebase/auth"

import firebaseConfig from "./firebase-services.cfg"

// import { getFirestore } from 'firebase/firestore'

// Firebase Firestore
export const firebaseApp = initializeApp(firebaseConfig)

// How to use it?
// import { useFirestore, useCollection } from 'vuefire'
// import { collection } from "firebase/firestore"
//
// const db = useFirestore()
// const joys = useCollection(collection(db, 'joys'))

// Firebase Analytics
const analytics = getAnalytics(firebaseApp);

// const db = getFirestore(firebase)

// const readFromFirebase = async (collectionName) => {
//   const FirebaseCollection = db.collection(collectionName);
// };

export default analytics;
