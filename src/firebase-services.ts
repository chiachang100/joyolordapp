import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// import "firebase/app-check"
// import "firebase/auth"
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  projectId: 'joyolordapp'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = getFirestore(firebase)

// const readFromFirebase = async (collectionName) => {
//   const FirebaseCollection = db.collection(collectionName);
// };

export default analytics;
