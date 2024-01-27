import { getFirestore } from 'firebase-admin/firestore';
import { appServer } from './server';
export const CollectionNameURL = 'url';
export const adminDB = getFirestore(appServer);
export const urlRefAdminDB = adminDB.collection(CollectionNameURL);
