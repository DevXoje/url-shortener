import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBBVbhs5rR42-_E_VgqVT9GXLC7tjZrrpY",
    authDomain: "url-shortened-f9cd9.firebaseapp.com",
    projectId: "url-shortened-f9cd9",
    storageBucket: "url-shortened-f9cd9.appspot.com",
    messagingSenderId: "587895607472",
    appId: "1:587895607472:web:422c5d199a1afb291ceb75",
    measurementId: "G-8M1C9EBN6X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const addURL = async (url: string, shortCode: string) => {
    try {
        const docRef = await addDoc(collection(db, "urls"), {
            url,
            shortCode
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const getURLS = async () => {
    const mockURLS = ["https://www.google.com", "https://www.youtube.com", "https://www.facebook.com", "https://www.twitter.com"]
    return mockURLS
    /* try {
        const urlsCol = collection(db, 'urls');
        const urlSnapshot = await getDocs(urlsCol);
        const urlList = urlSnapshot.docs.map(doc => doc.data());
        return urlList;
    } catch (e) {
        console.log(e);

        console.error("Error getting documents: ", e);
    } */

}