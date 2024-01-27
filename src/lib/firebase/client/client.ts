import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseClientConfig } from './config';

export const appClient = initializeApp(firebaseClientConfig);
export const clientDB = getFirestore(appClient);
