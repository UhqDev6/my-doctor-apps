// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDSqyn-_JrwAwWEAXZl5iu3daOmfIpWSnI',
  authDomain: 'my-doctor-bdf28.firebaseapp.com',
  projectId: 'my-doctor-bdf28',
  storageBucket: 'my-doctor-bdf28.appspot.com',
  messagingSenderId: '762660866308',
  appId: '1:762660866308:web:3e8be046d0c0cf4137a851',
};

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig);
