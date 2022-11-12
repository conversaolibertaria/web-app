import { initializeApp } from "firebase/app";

interface Props {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export function getFirebaseApp(props: Props) {
  const app = initializeApp(props);

  return app;
}
