import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDinHubix3lO2xTFVDdr8p6xr5VV0jQaRs",
  authDomain: "reactproject2-fdaf3.firebaseapp.com",
  databaseURL: "https://reactproject2-fdaf3-default-rtdb.firebaseio.com",
  projectId: "reactproject2-fdaf3",
  storageBucket: "reactproject2-fdaf3.appspot.com",
  messagingSenderId: "845173235015",
  appId: "1:845173235015:web:024586793e1437d303c062"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };




  
