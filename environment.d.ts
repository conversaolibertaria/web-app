declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // nextjs
      NEXT_PUBLIC_APP_ENV: string;
      NEXT_PUBLIC_BASEPATH: string;

      // firebase client
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_API_KEY: string;
      NEXT_PUBLIC_STORAGE_BUCKET: string;
      NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_APP_ID: string;
      NEXT_PUBLIC_MEASUREMENT_ID: string;
    }
  }
}

export {};
