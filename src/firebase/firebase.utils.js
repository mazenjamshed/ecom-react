import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCU1kqrdQBWPjiOqudeW4lHhwBahbXeNmQ',
  authDomain: 'ecom-react-c3817.firebaseapp.com',
  projectId: 'ecom-react-c3817',
  storageBucket: 'ecom-react-c3817.appspot.com',
  messagingSenderId: '333824737890',
  appId: '1:333824737890:web:7365940e4aed4c874b473b',
  measurementId: 'G-2NKC90B65Z',
};

const app = initializeApp(config);

// Authenticcation
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWIthGoogle = async () => {
  await signInWithPopup(auth, provider);
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   const user = result.user;

  //   console.log(result);
  //   console.log(user);
  //   return user;
};
