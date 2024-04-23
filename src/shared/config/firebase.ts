import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { initializeApp } from 'firebase/app'

const API_KEY = import.meta.env.VITE_API_KEY
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
const APP_ID = import.meta.env.VITE_APP_ID
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const database = getFirestore(app)

export { auth, database as db, provider }
