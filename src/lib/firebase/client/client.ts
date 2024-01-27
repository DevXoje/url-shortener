import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseClientConfig } from './config';
let appClient: FirebaseApp;
let clientDB: Firestore;
try {
	appClient = initializeApp(firebaseClientConfig);
	clientDB = getFirestore(appClient);
} catch (err: any) {
	/* 	if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack);
	} */
	console.error('Firebase initialization error', err.stack);
}

export { appClient, clientDB };
