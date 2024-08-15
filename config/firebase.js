import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
	apiKey: 'AIzaSyBU2tL9zHgBnLWyYHvPZYcQ-lqwHaUoB2s',
	authDomain: 'flash-mint.firebaseapp.com',
	projectId: 'flash-mint',
	storageBucket: 'flash-mint.appspot.com',
	messagingSenderId: '830018042142',
	appId: '1:830018042142:web:5173d1dab8be2d1c4df10f',
	measurementId: 'G-BXY2YT4NEQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider= new GoogleAuthProvider(auth)