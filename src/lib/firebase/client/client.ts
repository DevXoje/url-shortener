import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

export const appClient = initializeApp(firebaseConfig);
export const clientDB = getFirestore(appClient);
