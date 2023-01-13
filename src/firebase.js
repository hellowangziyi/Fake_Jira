import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC91ROnk7sgmUuzWf-AxBlWy0eQq1-1R6M',
  authDomain: 'jira-d904d.firebaseapp.com',
  projectId: 'jira-d904d',
  storageBucket: 'jira-d904d.appspot.com',
  messagingSenderId: '134865147968',
  appId: '1:134865147968:web:7e17172e4b5c19d21de7a5'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
