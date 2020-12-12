import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.mesurementId,
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default (context:any, inject:any) => {
    const $fb = {
      app: firebase.app,
      firestore: firebase.firestore,
    }
    inject('fb',$fb)
  }