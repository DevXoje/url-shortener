import type { ServiceAccount } from 'firebase-admin';

export const firebaseServerConfig: ServiceAccount = {
	privateKey: import.meta.env.FIREBASE_PRIVATE_KEY,
	clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
	projectId: import.meta.env.FIREBASE_PROJECT_ID,
};
