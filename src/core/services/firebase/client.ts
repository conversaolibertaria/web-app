import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { Settings } from "@/core/settings";

const APP_NAME = "conversaolibertaria";

let app = getApps().find((app) => app.name === APP_NAME);

if (!app) {
  app = initializeApp({
    apiKey: Settings.firebase.apiKey,
    appId: Settings.firebase.appId,
    authDomain: Settings.firebase.authDomain,
    measurementId: Settings.firebase.measurementId,
    projectId: Settings.firebase.projectId,
    messagingSenderId: Settings.firebase.messagingSenderId,
    storageBucket: Settings.firebase.storageBucket,
  }, APP_NAME);
}

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
