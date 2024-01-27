import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { firebaseServerConfig } from './config';
const activeApps = getApps();

export const appServer =
	activeApps.length === 0
		? initializeApp({
				credential: cert(firebaseServerConfig),
			})
		: activeApps[0];
